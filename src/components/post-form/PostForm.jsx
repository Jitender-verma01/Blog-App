import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues, formState: { errors } } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active",
            featuredimage: null // Initialize featuredimage as null
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        try {
            let dbPost;
            let fileId = post ? post.featuredimage : null; // Use existing image ID if updating
            alert("Please wait for a sec......")

            if (data.featuredimage && data.featuredimage.length > 0) {
                // Handle file upload
                const file = await service.uploadFile(data.featuredimage[0]);
                if (post && fileId) {
                    await service.deleteFile(fileId); // Remove old file if updating
                }
                fileId = file.$id;
            } else if (!post) {
                // If creating a new post, a featured image is required
                return;
            }

            // Create or update the post
            if (post) {
                dbPost = await service.updatePost(post.$id, {
                    ...data,
                    featuredimage: fileId || post.featuredimage,
                });
            } else {
                dbPost = await service.createPost({
                    ...data,
                    userid: userData.$id,
                    featuredimage: fileId,
                });
            }

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } catch (error) {
            console.error("Error while submitting the post:", error);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s+/g, "-");
        }
        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("featuredimage")}
                />
                {post && post.featuredimage && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredimage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
            {errors.featuredimage && !post && <p className='text-red-600 font-bold mt-8 text-center'>Featured Image is required for new posts.</p>}
            {errors.title && <p className='text-red-600 font-bold mt-8 text-center'>Title is required.</p>}
            {errors.content && <p className='text-red-600 font-bold mt-8 text-center'>Content is required.</p>}
        </form>
    );
}
