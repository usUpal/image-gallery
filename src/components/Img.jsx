import React, { useState } from "react";
import images from "../../images.json";
import GalleryNav from "./GalleryNav";
import ImageGallery from "./ImageGallery";
import UploadImage from "./Upload";

const Img = () => {
  const [myImages, setMyImages] = useState(images);
  const [selectImages, setSelectImages] = useState([]);

  const [dragging, setDragging] = useState(false);
  const [draggedImage, setDraggedImage] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleFileUpload = (e) => {
    const selectedImage = e.target.files;

    const newImages = Array.from(selectedImage).map((image, index) => {
      const id = myImages.length + index + 1;
      
      const uploadedImage = URL.createObjectURL(image)


      return { id, image: uploadedImage };
    });
    console.log(newImages, myImages)

    setMyImages([...myImages, ...newImages]);

    console.log(myImages, newImages)
  };

  const handleDeleteFile = () => {
    const updatedImages = myImages.filter((image) => !selectImages.some((selected) => selected.id === image.id));

    setMyImages(updatedImages);
    setSelectImages([]);
  };

  const handleDragStart = (image) => {
    setDragging(true);
    setDraggedImage(image);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
  };

  const handleDrop = (targetIndex) => {
    setDragging(false);

    if (draggedImage) {
      const updatedImages = myImages.filter((image) => image.id !== draggedImage.id);
      updatedImages.splice(targetIndex, 0, draggedImage);

      setMyImages(updatedImages);
      setDraggedImage(null);
    }
  };

  return (
    <main className=" flex flex-row items-center justify-center md:p-0 p-5">
      <section className="lg:max-w-full md:w-3/4 w-full bg-white rounded-lg shadow">
        <GalleryNav selectImages={selectImages} setSelectImages={setSelectImages} handleDeleteFile={handleDeleteFile} />
        <section className="m-10 p-2">
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6" onDragOver={handleDragOver}>
            {myImages.map((image, index) => (
              <ImageGallery
                key={index}
                image={image}
                index={index}
                selectImages={selectImages}
                setSelectImages={setSelectImages}
                handleDragStart={handleDragStart}
                handleDrop={handleDrop}
                dragging={dragging}
                draggedIndex={draggedIndex}
              />
            ))}
            <UploadImage handleFileUpload={handleFileUpload} />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Img;