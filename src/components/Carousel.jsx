import { useState } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

function Carousel({images}) {
  return (
    <div>
      <TECarousel showControls showIndicators crossfade ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {images.map((item)=>(
            <TECarouselItem
            itemID={item.id}
            key={item.id}
            className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src={item.img}
              className="block w-full lg:h-[85vh]"
              alt="..."
            />
          </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </div>
  );
}

export default Carousel;
