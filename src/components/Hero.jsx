import React from "react";
import Button from "./Button";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Assets } from "../constants/Assets";

const Hero = () => {
  return (
    <main
      id="home"
      className="hero bg-main-2 mt-[85px] lg:p-20 p-10 grid lg:grid-cols-2 sm:grid-cols-1"
    >
      <div className="lg:flexBetween sm:flexCenter md:flexCenter sm:text-center md:text-center lg:text-start container">
        <div className="">
          <Button
            classes="md:m-auto sm:m-auto lg:m-0"
            type="button"
            title="Welcome In Our Portofolio"
            theme="btn_hero "
          />
          <div className="py-5 regular-64 text-main-3 capitalize">
            <span className="regular-64 capitalize">
              Hi! We Are{" "}
              <span className=" text-transparent stroke">Tofan Al Aqsa</span>
            </span>
            <br />
            <span>
              <TypeAnimation
                sequence={[
                  "مصلحون علي منهاج النبوة",
                  1000,
                  "عباد مذنبون يطمعون في كرم ربهم",
                  1000,
                  "القمة لنا ولو تعثرنا الاف المرات",
                  1000,
                  "هنكسب يعني هنكسب",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="regular-64 text-main-3 capitalize"
                repeat={Infinity}
              />
            </span>
          </div>
          <Link to={"/"} className="text-main-2 py-10 block">
            Lets Connect{" "}
            <div className="left_right inline-block">
              <ArrowForwardIos />
            </div>
          </Link>
        </div>
      </div>
      <div className="up_down flexCenter lg:w-[500] lg:h-[500] md:w-[300] md:h-[300] sm:w-[200] sm:h-[200]">
        <img
          className="lg:w-[500] lg:h-[500] md:w-[300] md:h-[300] sm:w-[200] sm:h-[200]"
          src={Assets.Logo}
          alt="Logo"
          width={600}
          height={600}
        />
      </div>
    </main>
  );
};

export default Hero;
