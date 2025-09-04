import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const RobotoFont = Roboto({
  variable: "--font-roboto",
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
      <body className={`${RobotoFont.variable}`}>{children}</body>
    </html>
  );
}
