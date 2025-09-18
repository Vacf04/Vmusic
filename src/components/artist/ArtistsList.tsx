"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Artist } from "@/actions/top-artists-get";
import ArtistsCard from "./ArtistCard";

export default function ArtistsList({ artists }: { artists: Artist[] }) {
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
      {artists.map((artist) => (
        <SwiperSlide tag="li" key={artist.id}>
          <ArtistsCard artist={artist} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
