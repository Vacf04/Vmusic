'use client';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, ReactNode } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import styles from './SwiperCarousel.module.css';

interface SwiperCarouselProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function SwiperCarousel<T>({
  title,
  items,
  renderItem,
}: SwiperCarouselProps<T>) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null,
  );

  const handleNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <section className="showRight">
      <header className={styles.headerSlide}>
        <h1>{title}</h1>
        <div>
          <button onClick={handlePrevSlide}>
            <BiLeftArrow />
          </button>
          <button onClick={handleNextSlide}>
            <BiRightArrow />
          </button>
        </div>
      </header>
      <Swiper
        onSwiper={setSwiperInstance}
        tag="ul"
        spaceBetween={40}
        breakpoints={{
          100: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide tag="li" key={index}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
