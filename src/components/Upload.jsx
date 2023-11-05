import React from "react";
import { BsImage } from "react-icons/bs";

const UploadImage = ({ handleFileUpload }) => {
  return (
    <div className='relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors ease-linear'>
      <input
        type='file'
        multiple
        name='images'
        id='images'
        className='absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer'
        onChange={handleFileUpload}
      />
      <div className='h-full w-full flex flex-col justify-center items-center gap-y-4'>
        <BsImage height='48' width='48' />
        <span className='whitespace-nowrap text-lg'>Add Images</span>
      </div>
    </div>
  );
};

export default UploadImage;
