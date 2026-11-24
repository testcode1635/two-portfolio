import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});
export const metadata: Metadata = {
  title: "Firozmahmud",
  description: "A dedicated Advocate providing professional legal consultation, trusted legal advice, and effective representation. Committed to protecting clients' rights, delivering ethical legal services, and making justice accessible to everyone through personalized legal solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#030712] text-stone-200 ${archivo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
// Minimal Single Page Portfolio
// https://www.youtube.com/watch?v=7ItfH0-4Xyc&t=276s
// https://www.youtube.com/watch?v=ELssXP1sTC8
// https://www.youtube.com/watch?v=w6z74VlnTSo
// https://personalfolio.framer.website/
