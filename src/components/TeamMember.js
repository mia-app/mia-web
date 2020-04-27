import React from "react";

export const TeamMember = ({ src, name, role }) => {
  return (
    <div className="teamMember">
      <img src={src} alt={name} />
      <p className="bodyText emphasized">{name}</p>
      <p className="bodyText">{role}</p>
    </div>
  );
};
