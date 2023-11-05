import React from "react";
import { BsImage } from "react-icons/bs";

const Upload = ({ handleFileUpload }) => {
  return (
    <div className='relative border-2 border-solid rounded-lg p-4 hover:bg-gray-50 transition-colors ease-linear'>
      <input
        type='file'
        multiple
        name='images'
        id='images'
        className='absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer'
        onChange={handleFileUpload}
      />
      <div className='h-full w-full flex flex-col justify-center items-center gap-y-4'>
        <BsImage height='64' width='64' />
        <span>Add Image</span>
      </div>
    </div>
  );
};

export default Upload;
