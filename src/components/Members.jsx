import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Assets } from "../constants/Assets";
import { MEMBERS } from "../constants/indexEn";

const Members = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="members py-5 bg-main-2" id="members">
      <div className="w-3/4 m-auto text-center text-main-1">
        <h1 className="regular-60">Members</h1>
        <p className="regular-32 text-main-1 pb-10">
          You can See Our Members Here
        </p>
        <Slider {...settings}>
          {MEMBERS.map((member) => {
            return (
              <div className="rounded-t-xl flex-col flexCenter relative propertDiv">
                <img
                  className="rounded-xl"
                  src={Assets.User1}
                  alt="Image"
                  width={300}
                  height={300}
                />
                <div className=" absolute top-4 left-4 z-[1000] flex flex-col gap-5 opacity-0 propert   text-main-4">
                  <p className="py-2 px-4 text-lg rounded-full bg-main-3 flexCenter">
                    {member.age}Y
                  </p>
                  <p className="py-2 px-4 text-lg rounded-full bg-main-3 flexCenter">
                    {member.program}
                  </p>
                </div>
                <div className="p-4">
                  <p className="regular-24 pt-5 text-start w-full">
                    {member.name}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Members;
