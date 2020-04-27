import React from "react";

export const Principal = ({ alt, src, title, body }) => {
  return (
    <div className="principal">
      <img src={src} alt={alt} loading="lazy" />
      <h3 className="bodyText emphasized">{title}</h3>
      <p className="bodyText">{body}</p>
    </div>
  );
};
