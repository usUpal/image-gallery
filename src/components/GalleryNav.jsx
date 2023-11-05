import React from "react";
import { FaTrash } from "react-icons/fa";

const GalleryNav = ({ selectImages, setSelectImages, handleDeleteFile }) => {
  return (
    <nav className='py-4 px-6 border-b-2'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-mono '>
          {selectImages.length === 0 ? (
            <span className='font-mono text-2xl '>Gallery</span>
          ) : (
            <label
              htmlFor='select'
              className='flex flex-row justify-between items-center gap-x-4'
            >
              <input
                type='checkbox'
                name='select'
                id='select'
                checked={selectImages.length > 0}
                className='w-5 h-5 to-yellow-600 cursor-pointer'
                onChange={() => setSelectImages([])}
              />
              Images Selected({selectImages.length})
            </label>
          )}
        </h1>
        <button
          className='text-red-500 hover:scale-105'
          onClick={handleDeleteFile}
        >
          <FaTrash />
        </button>
      </div>
    </nav>
  );
};

export default GalleryNav;
