import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className="layout__outer">
      <div className="layout__inner">{children}</div>
    </div>
  );
};
