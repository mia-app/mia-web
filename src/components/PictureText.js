import React from "react";

export const PictureText = ({ src, alt, children }) => {
  return (
    <div className="pictureText">
      <img src={src} alt={alt} loading="lazy" />
      <p className="bodyText">{children}</p>
    </div>
  );
};
