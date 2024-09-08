import React from "react";
import { MOLAKAS } from "../constants/Assets";
import PDFViewer from "pdf-viewer-reactjs";

const SectionThree = () => {
  const docs = [
    { url: "../public/mok1.pdf" },
    { url: "../public/mok2.pdf" },
    { url: "../public/mok1.docx" },
    { url: "../public/mok2.docx" },
    { url: "../public/mok3.docx" },
    { url: "../public/mok4.docx" },
];
  return (
    <section className="container m-auto lg:p-20 p-10 ">
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <div className="cursor-pointer hover:scale-105 transition-all h-10 border border-black">
          <PDFViewer
            document={{
              url: "../public/mok2.pdf",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
