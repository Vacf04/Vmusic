import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Aside from "@/components/aside/Aside";
import MusicPlayer from "@/components/player/MusicPlayer";

const QuicksandFont = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vmusic",
  description: "Escute suas musicas favoritas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${QuicksandFont.variable} body`}>
        <Aside />
        <main>{children}</main>
        <MusicPlayer />
      </body>
    </html>
  );
}
