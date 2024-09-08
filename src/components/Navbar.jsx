"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/indexEn";
import Button from "./Button";
import { Facebook, FacebookOutlined, LinkedIn, Twitter } from "@mui/icons-material";
import MenuOverlay from "./MenuOverlay";
import { FaXmark } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import { Assets } from "../constants/Assets";
import { BsTelegram, BsTwitter } from "react-icons/bs";
// import "../src/index"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-main-1 bg-opacity-100">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4">
        <Link
          to={"/"}
          className="text-2xl md:text-5xl text-main-2 font-semibold"
        >
          <img src={Assets.Logo} alt="logo" width={74} height={20} />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-main-2 text-main-2 hover:text-main-4 hover:border-main-4"
            >
              <BiMenu className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-main-2 text-main-2 hover:text-main-4 hover:border-main-4"
            >
              <FaXmark className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 text-main-2 md:flex-row md:space-x-8 mt-0">
            {NAV_LINKS.map((link) => (
              <Link
                to={link.to}
                key={link.key}
                className={activeLink === `${link.key}` ? "activelink" : "link"}
                onClick={() => onUpdateActiveLink(`${link.key}`)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flexCenter">
              <Link
                to={"https://t.me/+yvW1IC1CwyxmOTZi"}
                key={"telegram"}
                className="regular-16 ico_blue_outline text-main-2 flexCenter cursor-pointer transition-all hover:text-main-3 hover:scale-105"
              >
                <BsTelegram />
              </Link>
              <Link
                to={"https://x.com/toufan_aqsaa"}
                key={"twitter"}
                className="regular-16 ico_blue_outline text-main-2 flexCenter cursor-pointer transition-all hover:text-main-3 hover:scale-105"
              >
                <BsTwitter />
              </Link>
            </div>
            <div className="lg:flexCenter hidden">
              <Button
                type="button"
                title="Contact Us"
                icon={Assets.User}
                theme="btn_gray "
              />
            </div>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default Navbar;
