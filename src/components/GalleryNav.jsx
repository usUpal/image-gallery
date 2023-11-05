import React from "react";

const GalleryNav = ({ selectImages, setSelectImages, handleDeleteFile }) => {
  return (
    <nav className="py-4 px-6 border-b-2">
      <article className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-mono ">
          {selectImages.length === 0 ? (
            <span className="font-mono text-3xl ">Gallery</span>
          ) : (
            <label htmlFor="select" className="flex flex-row justify-between items-center gap-x-4">
              <input
                type="checkbox"
                name="select"
                id="select"
                checked={selectImages.length > 0}
                className="w-5 h-5 to-yellow-600 cursor-pointer"
                onChange={() => setSelectImages([])}
              />
              {selectImages.length} Files Selected
            </label>
          )}
        </h1>
        <button
          className="text-red-500 font-medium hover:scale-105 transform transition-transform hover:duration-300 p-2 rounded-lg hover:underline flex items-center justify-center"
          onClick={handleDeleteFile}
        >
          Delete files
        </button>
      </article>
    </nav>
  );
};

export default GalleryNav;