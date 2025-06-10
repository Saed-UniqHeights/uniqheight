import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VIDEO_SOURCES = {
  "720p": "/assets/video.mp4", // Replace with your video path
};

const SPEEDS = [0.5, 1, 1.5, 2];

const Player: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    setMuted(v === 0);
    if (videoRef.current) {
      videoRef.current.volume = v;
      videoRef.current.muted = v === 0;
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !muted;
    setMuted(newMuted);
    videoRef.current.muted = newMuted;
    if (newMuted) {
      videoRef.current.volume = 0;
    } else {
      videoRef.current.volume = volume;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Video Container */}
      <div
        className="relative group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          src={VIDEO_SOURCES["720p"]}
          className="w-full aspect-video object-cover "
          onClick={handlePlayPause}
        />

    
        

        {/* Center Play/Pause Button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            showControls || !playing ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="bg-black/20 hover:bg-black/60 backdrop-blur-sm  p-2 rounded-full transition-all duration-200 transform hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
          >
            {playing ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>
        </div>

        {/* Bottom Controls */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePlayPause}
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                {playing ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMute}
                  className="text-gray-400 hover:text-gray-300"
                >
                  {muted || volume === 0 ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-gray-400 rounded-full appearance-none cursor-pointer"
                />
              </div>

              <div className="text-gray-400 text-sm font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            {/* Progress Bar - positioned absolutely at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <div
                className="h-full bg-gray-700 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Player;
