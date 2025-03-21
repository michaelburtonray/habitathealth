'use client'

import Image from "next/image";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import IconArrow from "./IconArrow";

import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroSlider(props) {
  const { slides, text, title } = props;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="hero-slider bg-green grid grid-cols-2 relative overflow-hidden rounded-b-2xl">
      <div className="hero-slider__text flex items-end max-lg:-mr-[100%] p-5 lg:p-10 pointer-events-none text-green z-10">
        <div className="bg-cream p-5 lg:p-10 rounded-2xl sticky bottom-10 pointer-events-auto">
          {title && <h3>{title}</h3>}
          {text && <p className="eyebrow mt-5 lg:mt-[2.125rem]">{text}</p>}
        </div>
      </div>

      <div className="hero-slider-slider -ml-[100%]">
        <Swiper
          grabCursor={true}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          slidesPerView={1}
        >
          {slides.map(({ _key, alt, aspectRatio, assetPath }) => {
            if (!assetPath) return '';

            return (
              <SwiperSlide key={_key}>
                <figure className="relative max-lg:!aspect-[36/55] lg:w-full lg:max-h-[calc(100svh-9.5rem)]" style={{ aspectRatio }}>
                  <Image
                    src={assetPath}
                    fill={true}
                    alt={alt || 'Habitat Health'}
                    className="object-center object-cover"
                  />
                </figure>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className="hero-slider__controls absolute inset-0 flex lg:items-end lg:justify-end z-10 pointer-events-none">
        <div className="flex gap-3 p-5 lg:p-10 sticky bottom-0 pointer-events-auto">
          <button ref={prevRef} className="button rotate-180" aria-label="Previous slide">
            <IconArrow />
          </button>

          <button ref={nextRef} className="button" aria-label="Next slide">
            <IconArrow />
          </button>
        </div>
      </div>
    </div>
  )
}
