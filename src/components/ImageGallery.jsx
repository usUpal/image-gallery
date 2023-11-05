import React from "react";
import DragNDrops from "./DragNDrops";

const ImageGallery = ({
  image,
  index,
  selectImages,
  setSelectImages,
  handleDragStart,
  handleDrop,
  dragging,
  draggedIndex,
}) => {
  return (
    <div
      key={index}
      className={
        "group transition-all relative before:content-[''] before:absolute before:h-full before:w-full before:rounded-lg before:transition-colors  translate-y-0 before:cursor-move" +
        (index === 0 ? " md:col-span-2 md:row-span-2" : " col-span-1") +
        (selectImages.find((photo) => photo.id === image.id) ? " opacity-100" : " hover:before:bg-black/50")
      }
      draggable={true}
      onDragStart={() => handleDragStart(image)}
      onDrop={() => handleDrop(index)}
    >
      <img
        src={image.image}
        alt={image.id}
        className={
          "h-full w-full max-w-full rounded-lg object-contain border-2" +
          " " +
          (selectImages.find((photo) => photo.id === image.id) && "opacity-70")
        }
      />
      <input
        type="checkbox"
        name={image.id}
        id={image.id}
        className={
          "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer" +
          " " +
          (selectImages.find((photo) => photo.id === image.id) ? "opacity-100" : "opacity-0")
        }
        checked={selectImages.find((photo) => photo.id === image.id) ? true : false}
        onChange={() => {
          if (selectImages.find((photo) => photo.id === image.id))
            setSelectImages(selectImages.filter((photo) => photo.id !== image.id));
          else setSelectImages([...selectImages, image]);
        }}
      />
      <DragNDrops dragging={dragging} draggedIndex={draggedIndex} image={image} />
    </div>
  );
};

export default ImageGallery;