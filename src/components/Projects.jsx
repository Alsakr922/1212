import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Projects = () => {
  return (
    <section
      className="lg:px-[30px] bg-main-3 px-[10px] projects"
      id="projects"
    >
      <div className="text-center lg:p-10 sm:p-5 md:p-7 text-main-1 rounded-5xl container m-auto">
        <div className="title p-5">
          <h1 className="text-[45px] sm:text-center  lg:tracking-widest uppercase">
            Our Projects
          </h1>
          <p className="text-main-1">
            يمكن رؤية بعض اعمال الفريق,من صور وفيديوهات وتلخيصات{" "}
          </p>
        </div>{" "}
        {/* Title */}
        <div className="bars text-[12px] m-auto pt-10 w-fit text-center">
          <Link
            to="one"
            className="lg:text-[22px] sm:text-[16px] md:text-[18px] bg-white lg:px-[25px] px-[16px] cursor-pointer hover:text-white hover:bg-main-3 transition-all py-3 border-r-2 text-main-2"
          >
            صـــور
          </Link>
          <Link
            to="two"
            className="lg:text-[22px] sm:text-[16px] md:text-[18px] lg:px-[25px] px-[16px] cursor-pointer hover:text-white hover:bg-main-3 transition-all py-3 border-r-2 text-main-2"
          >
          فيديوهات
          </Link>
          <Link
            to="three"
            className="lg:text-[22px] sm:text-[16px] md:text-[18px] lg:px-[25px] px-[16px] cursor-pointer hover:text-white hover:bg-main-3 transition-all py-3 rounded-r text-main-2"
          >
            تلخيصات
          </Link>
        </div>
        <Outlet />
      </div>{" "}
      {/* Container */}
    </section>
  );
}

export default Projects
