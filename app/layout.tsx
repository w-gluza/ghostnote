import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./styles/reset.css";
import "./styles/globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GhostNote - Groove Recognition Quiz App",
  description:
    "Train your ears and master the groove with GhostNote - an interactive drum pattern quiz app built for musicians and rhythm learners.",
  keywords: [
    "GhostNote",
    "Drum Quiz App",
    "Music Learning",
    "Groove Recognition",
    "Ear Training",
    "MIDI",
    "Next.js",
    "React",
    "Prisma",
    "Supabase",
    "Rhythm Game",
  ],
  authors: [{ name: "Wioletta Gluza", url: "https://github.com/w-gluza" }],
  creator: "Wioletta Gluza",
  openGraph: {
    title: "GhostNote - Groove Recognition Quiz App",
    description:
      "Master rhythms and challenge your ears with GhostNote, a modern groove recognition and ear training web app.",
    url: "https://www.theghostnote.app",
    siteName: "GhostNote",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "GhostNote - Groove Recognition Quiz App",
    description:
      "Interactive ear training and groove matching app for drummers and musicians.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
