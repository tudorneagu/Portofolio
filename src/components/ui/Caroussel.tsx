import { useState } from "react";
import type { Project } from "../../@types/index.types";

function Caroussel({ images, title }: Project) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPath = images?.map((img: string) => `/projects/${title}/${img}`);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="w-full h-48 overflow-hidden">
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
      <div className="w-full  flex justify-center items-center space-x-2 mt-4">
        {imagesPath?.map((_, index) => (
          <span
            key={index}
            className={`rounded-full  cursor-pointer ${
              index === currentIndex
                ? "bg-black h-3 w-3"
                : "bg-bg-light h-2 w-2 "
            }`}
            onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
}

export default Caroussel;
