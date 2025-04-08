'use client'

import Image from "next/image";
import { useRef } from "react";
import { Keyboard, Navigation } from "swiper/modules";
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
          {title && <h4>{title}</h4>}
          {text && <p className="mt-5 lg:mt-[2.125rem]">{text}</p>}
        </div>
      </div>

      <div className="hero-slider-slider -ml-[100%]">
        <Swiper
          grabCursor={true}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          loop={true}
          modules={[Keyboard, Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          slidesPerView={1}
        >
          {slides.map(({ _key, alt, aspectRatio, assetPath }, idx) => {
            if (!assetPath) return '';

            return (
              <SwiperSlide key={_key}>
                <figure className="relative max-lg:!aspect-[36/55] lg:w-full lg:max-h-[calc(100svh-9.5rem)]" style={{ aspectRatio }}>
                  <Image
                    src={assetPath}
                    fill={true}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    alt={alt || 'Habitat Health'}
                    className="object-center object-cover"
                  />
                </figure>
              </SwiperSlide>
            )
          })}

          <div className="hero-slider__controls absolute inset-0 flex lg:items-end lg:justify-end z-10 pointer-events-none">
            <div className="flex gap-3 h-fit p-5 lg:p-10 sticky max-lg:top-0 lg:bottom-0 pointer-events-auto">
              <button ref={prevRef} className="button *:pointer-events-none rotate-180" aria-label="Previous slide">
                <IconArrow />
              </button>

              <button ref={nextRef} className="button *:pointer-events-none" aria-label="Next slide">
                <IconArrow />
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  )
}
