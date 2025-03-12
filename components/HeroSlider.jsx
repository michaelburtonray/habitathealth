'use client'

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import IconArrow from "./IconArrow";

import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroSlider(props) {
  const { slides, text, title } = props;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="hero-slider bg-green grid grid-cols-2 relative rounded-b-2xl">
      <div className="hero-slider__text flex items-end max-lg:-mr-[100%] p-5 lg:p-10 text-green z-10">
        <div className="bg-cream p-5 lg:p-10 rounded-2xl sticky bottom-10">
          {title && <h4>{title}</h4>}
          {text && <p className="eyebrow mt-5 lg:mt-[2.125rem]">{text}</p>}
        </div>
      </div>

      <div className="hero-slider-slider -ml-[100%]">
        <Swiper
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
                <figure className="relative max-lg:!aspect-[36/55]" style={{ aspectRatio }}>
                  <Image
                    src={assetPath}
                    fill={true}
                    alt={alt || 'Habitat Health'}
                    className="object-cover w-full"
                  />
                </figure>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className="hero-slider__controls absolute inset-0 flex lg:items-end lg:justify-end pointer-events-none z-10">
        <div className="flex gap-3 p-5 lg:p-10 sticky bottom-0">
          <button ref={prevRef} className="button pointer-events-auto rotate-180" aria-label="Previous slide">
            <IconArrow />
          </button>

          <button ref={nextRef} className="button pointer-events-auto" aria-label="Next slide">
            <IconArrow />
          </button>
        </div>
      </div>
    </div>
  )
}