import React from 'react'
import { Player } from 'video-react';
import vid1 from "../public/vid1.mp4";
import vid2 from "../public/vid2.mp4";
import vid3 from "../public/vid3.mp4";
import vid4 from "../public/vid4.mp4";


const SectionTwo = () => {
  // const VIDEOS = [
  //   { name: "vid1", src:{vid1} },
  //   { name: "vid2", src:{vid2} },
  //   { name: "vid4", src:{vid3} },
  //   { name: "vid3", src:{vid4} },
  // ];
  return (
    <section className="container m-auto lg:p-20 p-10 ">
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">

          <div className="cursor-pointer hover:scale-105 transition-all">
            <Player playsInline src={vid1} />
          </div>
          <div className="cursor-pointer hover:scale-105 transition-all">
            <Player playsInline src={vid4} />
            <Player playsInline src={vid2} />
          </div>
          <div className="cursor-pointer hover:scale-105 transition-all">
            <Player playsInline src={vid3} />
          </div>
      </div>
    </section>
  );
}

export default SectionTwo
