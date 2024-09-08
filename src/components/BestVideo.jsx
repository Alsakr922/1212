import { Player } from 'video-react';
import { Assets, BEST_VIDEO } from '../constants/Assets'
import React from 'react'
import video from "../public/bestVideo.mp4"
import "../../node_modules/video-react/dist/video-react.css";

const BestVideo = () => {
  return (
    <div className="w-[100vw] h-[90vh] bg-main-4 py-[100px] -mt-20">
      <h1 className="regular-60 text-main-1 text-center">Best Videos</h1>
      <p className="regular-32 text-main-1 pb-10 text-center">
        The Best Videos For The Year
      </p>
      <div className="max-w-[60%] mx-auto flexCenter -mt-20">
        <Player playsInline src={video} />
      </div>
    </div>
  );
}

export default BestVideo
