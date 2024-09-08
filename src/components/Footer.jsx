import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
} from "../constants/indexEn";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React from "react";
import { Assets } from "../constants/Assets";

const Footer = () => {
  return (
    <footer className="footer flexCenter lg:p-10 pt-[200px]">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link to="/" className="mb-10">
            <img src={Assets.Logo} alt="logo" height={30} width={60} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              // eslint-disable-next-line react/jsx-key
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-main-1 ">
                  {columns.links.map((link) => (
                    <Link
                      to={link.to}
                      key={link.title}
                      className="hover:text-main-3"
                    >
                      {link.title}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    to="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-main-1">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-main-1 hover:text-main-3">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <ul className="regular-14 flex gap-4 text-main-1">
                <div className="flexCenter">
                  <Link
                    to={"/facebook.com"}
                    key={"facebook"}
                    className="regular-16 ico_blue_outline text-main-1 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    to={"/twitter.com"}
                    key={"twitter"}
                    className="regular-16 ico_blue_outline text-main-1 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    <Twitter />
                  </Link>
                  <Link
                    to={"/twitter.com"}
                    key={"twitter"}
                    className="regular-16 ico_blue_outline text-main-1 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    <LinkedIn />
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="border bg-main-4" />
        <p className="regular-14 w-full text-center py-[20px] text-main-4">
          2024 Alsakr | All rights reserved by Mohamed Khaled{" "}
        </p>
      </div>
    </footer>
  );
};



const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
