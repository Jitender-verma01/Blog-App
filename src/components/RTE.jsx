import React, { useState } from 'react'
// import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'},
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };
  
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];


function RTE({name, control, label, defaultValue=""}) {

    const [value,setValue] = useState(defaultValue);
    const handleChange = (content, delta, source, editor) => {
        setValue(content);
        control.setValue(name,content)
      };
  return (
    <div className='w-full text-text2 bg-background'>
        {label && <label className='inline-block text-text font-bold mb-1 pl-1'>{label}</label>}

        <Controller name={name || "content"} control={control} 
        render={({field}) => (

            <ReactQuill
              value={field.value}
              onChange={field.onChange}
              modules={modules}
              formats={formats}
              theme="snow"
            />
            
        )} />
    </div>
    )
}

export default RTE