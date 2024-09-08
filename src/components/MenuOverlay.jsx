import React from "react";
import { NAV_LINKS } from "../constants/indexEn";
import { Link } from "react-router-dom";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import Button from "./Button";

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 px-3">
      {NAV_LINKS.map((link) => (
        // eslint-disable-next-line react/jsx-key
        <li>
          <Link
            to={link.href}
            key={link.key}
            className="block py-2 pl-3 pr-4 text-main-4 sm:text-xl rounded md:p-0 hover:text-main-3"
          >
            {link.label}
          </Link>
        </li>
      ))}

      <li className="flex gap-x-5">
        <Link
          to={"/facebook.com"}
          key={"facebook"}
          className="regular-16 ico_blue_outline text-main-2 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          <Facebook />
        </Link>
        <Link
          to={"/twitter.com"}
          key={"twitter"}
          className="regular-16 ico_blue_outline text-main-2 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          <Twitter />
        </Link>
        <Link
          to={"/twitter.com"}
          key={"twitter"}
          className="regular-16 ico_blue_outline text-main-2 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          <LinkedIn />
        </Link>
      </li>
      <li>
        <Button
          type="button"
          title="Contact Me"
          icon="/user.svg"
          theme="btn_gray_blue "
        />
      </li>
    </ul>
  );
};

export default MenuOverlay;
