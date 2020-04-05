import React from "react";

export const Modal = ({ title, body, link, href, error }) => {
  return (
    <div className={error ? "modal error" : "modal"}>
      <h3 className={error ? "error" : ""}>{title}</h3>
      <p className={error ? "error" : ""}>{body}</p>
      <a href={href} className="link">
        {link}
      </a>
    </div>
  );
};
