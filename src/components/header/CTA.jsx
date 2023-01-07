import React from "react";
const CV_URL =
  "https://drive.google.com/file/d/1dwDHFYsSosVw-fKwLE5bCpUmTZYiLCFZ/view?usp=share_link";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV_URL} target="_blank" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
