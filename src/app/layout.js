import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import LiveBackground from "@/components/LiveBackground";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 🌸 Background */}
        <LiveBackground />

        {/* 🎵 Music System */}
        <MusicPlayer />

        {/* 📄 Page */}
        {children}
      </body>
    </html>
  );
}