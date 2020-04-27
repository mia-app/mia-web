import React from "react";

import { ReactComponent as Check } from "../assets/check.svg";

export const TickText = ({ children }) => {
  return (
    <div className="tickText">
      <Check />
      <p className="bodyText">{children}</p>
    </div>
  );
};
