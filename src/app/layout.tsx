import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Aside from "@/components/aside/Aside";
import MusicPlayer from "@/components/player/MusicPlayer";
import { MusicProvider } from "@/context/MusicContext";

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
        <MusicProvider>
          <Aside />
          <main>{children}</main>
          <MusicPlayer />
        </MusicProvider>
      </body>
    </html>
  );
}
