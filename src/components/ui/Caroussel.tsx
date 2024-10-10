import { useState } from "react";

function Caroussel({
  images,
  title,
  width = "h-48",
  height = "w-full",
}: {
  images?: string[];
  title?: string;
  width?: string;
  height?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPath = images?.map((img: string) => `/projects/${title}/${img}`);

  const nextSlide = () => {
    if (images)
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  };
  const prevSlide = () => {
    if (images)
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col justify-center max-w-2xl mx-auto">
      <div
        className={`${width} ${height} flex justify-center  overflow-hidden`}>
        {images?.map((image: string, index: number) => (
          <img
            key={index}
            src={imagesPath ? imagesPath[index] : ""}
            alt={`carousel-${image}`}
            className={`w-auto h-full object-contain transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          />
        ))}
      </div>
      <div className=" relative w-full  flex justify-center items-center space-x-2 mt-4">
        <button
          className="text-m-bold text-medium  hover:text-black"
          onClick={prevSlide}>
          &#10094;
        </button>

        {imagesPath?.map((_, index) => (
          <span
            key={index}
            className={`rounded-full  cursor-pointer ${
              index === currentIndex
                ? "bg-black h-3 w-3"
                : "bg-white h-2 w-2 border border-black"
            }`}
            onClick={() => goToSlide(index)}></span>
        ))}
        <button
          className="text-m-bold text-medium  hover:text-black"
          onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Caroussel;
