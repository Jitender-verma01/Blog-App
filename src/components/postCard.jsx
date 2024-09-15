import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredimage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='bg-gray-300 rounded-xl p-3' style={{ height: '300px', width: '300px' }}>
        <div className='w-full h-3/4 mb-4 flex justify-center items-center'>
          <img
            src={appwriteService.getFilePreview(featuredimage)}
            alt={title}
            className='rounded-xl object-cover h-full w-full'
          />
        </div>
        <h2 className='text-xl font-bold text-center'>
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard;


