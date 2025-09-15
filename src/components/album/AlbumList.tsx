"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Album } from "@/actions/search-albuns-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./AlbumList.module.css";

export default function AlbumList({ albuns }: { albuns: Album[] }) {
  return (
    <Swiper
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
      {albuns.map((album) => (
        <SwiperSlide tag="li" key={album.id}>
          <Link href={`/album/${album.id}`} className={styles.albumItem}>
            <div>
              <Image
                src={album.cover_medium}
                width={500}
                height={500}
                alt={`${album.title}`}
              />
            </div>
            <p>{album.title}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
