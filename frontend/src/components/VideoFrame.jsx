import React, { useState } from 'react';
import poster from '../assets/PC-onetime.webp'
import { Play, Pause, X, PlayCircle } from 'lucide-react';

const VideoFrame = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(true); // Show iframe when playing
  };

  const closeVideo = () => {
    setIsPlaying(false); // Hide iframe when closing
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="relative bg-white rounded-xl shadow-xl w-[700px] h-[500px] flex flex-col justify-center items-center">

        {/* RGB dots outside frame */}
        <div className="absolute -top-4 -left-4 flex space-x-2 z-10">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-md" />
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-md" />
          <div className="w-3 h-3 rounded-full bg-blue-500 shadow-md" />
        </div>

        {/* Three-dot menu */}
        <div className="absolute top-3 right-4 text-gray-600 text-xl font-bold z-10">
          &#8942;
        </div>

        {/* Video iframe or placeholder */}
        <div className="relative w-full h-full bg-white rounded-xl overflow-hidden flex items-center justify-center">
          {isPlaying ? (
            <>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8l5EUFzvAi8?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <button
                onClick={closeVideo}
                className="absolute top-4 left-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </>
          ) : (
            <>
              <div className="w-full h-full bg-black/10 flex items-center justify-center">
                <button
                  onClick={togglePlayback}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-100 hover:bg-opacity-70 transition duration-200 cursor-pointer">
                    <PlayCircle size={64} className="text-blue-600 hover:scale-105 transition-transform" />
                  </div>
                </button>
                <img
                  src={poster}
                  alt="Video Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;
