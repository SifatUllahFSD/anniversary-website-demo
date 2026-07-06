

"use client";

import { useRef, useState, useEffect } from "react";
import { Music, X, Play, Pause } from "lucide-react";

const songs = [
  { name: "Love 01 💖", src: "/music/love2.mpeg" },
  { name: "Love 02 💕", src: "/music/love4.mpeg" },
  { name: "Love 03 💓", src: "/music/love11.mpeg" },
  { name: "Love 04 🌸", src: "/music/love3.mpeg" },
  { name: "Love 05 ✨", src: "/music/love16.mpeg" },
  { name: "Love 06 💫", src: "/music/love5.mpeg" },
  { name: "Love 07 💗", src: "/music/love6.mpeg" },
  { name: "Love 08 🌷", src: "/music/love7.mpeg" },
  { name: "Love 09 🌙", src: "/music/love8.mpeg" },
  { name: "Love 10 🍀", src: "/music/love9.mpeg" },
  { name: "Love 11 ☀️", src: "/music/love10.mpeg" },
  { name: "Love 12 🌕", src: "/music/love12.mpeg" },
  { name: "Love 13 🤍", src: "/music/love13.mpeg" },
  { name: "Love 14 ♾️", src: "/music/love14.mpeg" },
  { name: "Love 15 ❤️", src: "/music/love15.mpeg" },
  { name: "Love 16 💝", src: "/music/love1.mpeg" },
 
];


export default function MusicPlayer() {
  const audioRef = useRef(null);
  const panelRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // 🎧 default song load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[0].src;
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // ▶ play
  const playSong = async (song = songs[0], start = 0) => {
    setCurrentSong(song);
    setCurrentIndex(songs.findIndex((s) => s.src === song.src));

    setTimeout(async () => {
      audioRef.current.src = song.src;
      audioRef.current.currentTime = start;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {}
    }, 100);
  };

  // ⏸ pause
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // ⏱ time update
  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  };

  // 🎚 seek (drag)
  const seek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  return (
    <div className="player-root">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
      />

      <audio
        ref={audioRef}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => {
          const next = (currentIndex + 1) % songs.length;
          playSong(songs[next]);
        }}
      />

      {/* 🎵 FLOAT BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="player-fab fixed bottom-5 right-5 z-50 p-3 rounded-full music-bounce"
      >
        <Music size={20} />
      </button>

      {/* 🎶 GLASS PANEL */}
      {open && (
        <div ref={panelRef} className="player-panel fixed bottom-4 right-4 w-64 rounded-2xl z-50 flex flex-col">

          {/* HEADER */}
          <div className="player-header flex justify-between items-center px-3 py-2.5">
            <span className="player-header-label text-xs font-semibold">
              🎶 Playlist
            </span>

            <button onClick={() => setOpen(false)} className="player-close-btn">
              <X size={14} />
            </button>
          </div>

          {/* SONG LIST (SCROLL ENABLED) */}
          <div className="player-list max-h-40 overflow-y-auto p-2 space-y-1.5">

            {songs.map((song, i) => (
              <button
                key={i}
                onClick={() => playSong(song)}
                className={`player-song-item w-full flex justify-between items-center rounded-lg px-2.5 py-1.5 ${
                  currentSong.src === song.src ? "is-active" : ""
                }`}
              >
                <span className="text-[11px] truncate">
                  {song.name}
                </span>

                <span className="player-song-play text-xs">▶</span>
              </button>
            ))}

          </div>

          {/* SEEK BAR */}
          <div className="px-3 py-2">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={seek}
              className="player-seek w-full cursor-pointer"
            />

            <div className="player-time flex justify-between text-[10px]">
              <span>{Math.floor(currentTime)}s</span>
              <span>{Math.floor(duration)}s</span>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="px-3 pb-3">

            {isPlaying ? (
              <button
                onClick={pauseSong}
                className="player-control-btn is-playing w-full py-1.5 rounded-full text-xs flex items-center justify-center gap-1.5"
              >
                <Pause size={12} fill="currentColor" /> Pause
              </button>
            ) : (
              <button
                onClick={() => playSong(currentSong)}
                className="player-control-btn w-full py-1.5 rounded-full text-xs flex items-center justify-center gap-1.5"
              >
                <Play size={12} fill="currentColor" /> Play
              </button>
            )}

            <p className="player-current-name text-[10px] text-center mt-1.5 truncate">
              {currentSong.name}
            </p>

          </div>

        </div>
      )}

      <style>{`
        .player-root {
          --gold: #b76e79;
          --gold-soft: rgba(183, 110, 121, 0.14);
          --ink: #5c2a35;
          --muted: #9c6b74;
          --font-display: 'Cormorant Garamond', serif;
          --font-body: 'Inter', -apple-system, sans-serif;
          font-family: var(--font-body);
        }

        .player-fab {
          background: linear-gradient(135deg, #b76e79, #8f4a56);
          color: #fff5f6;
          box-shadow: 0 12px 28px -10px rgba(183, 110, 121, 0.6);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .player-fab:hover {
          box-shadow: 0 16px 32px -8px rgba(183, 110, 121, 0.7);
        }

        .player-panel {
          background: rgba(255, 245, 246, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 30px 60px -25px rgba(183, 110, 121, 0.4);
        }

        .player-header {
          border-bottom: 1px solid rgba(183, 110, 121, 0.18);
        }

        .player-header-label {
          font-family: var(--font-display);
          color: var(--ink);
        }

        .player-close-btn {
          color: var(--gold);
        }

        .player-song-item {
          background: rgba(255, 255, 255, 0.4);
          color: var(--ink);
          transition: background 0.2s ease;
        }

        .player-song-item:hover {
          background: var(--gold-soft);
        }

        .player-song-item.is-active {
          background: linear-gradient(135deg, #b76e79, #8f4a56);
          color: #fff5f6;
        }

        .player-song-play {
          color: var(--gold);
        }

        .player-song-item.is-active .player-song-play {
          color: #fff5f6;
        }

        .player-seek {
          accent-color: var(--gold);
        }

        .player-time {
          color: var(--muted);
        }

        .player-control-btn {
          background: rgba(255, 255, 255, 0.5);
          color: var(--gold);
          font-weight: 600;
          border: 1px solid rgba(183, 110, 121, 0.25);
        }

        .player-control-btn.is-playing {
          background: linear-gradient(135deg, #b76e79, #8f4a56);
          color: #fff5f6;
          border: none;
        }

        .player-current-name {
          color: var(--muted);
        }

        .music-bounce {
          animation: music-bounce-kf 2.4s ease-in-out infinite;
        }

        @keyframes music-bounce-kf {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}