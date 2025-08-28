import React from "react";
import { getValueByLabel } from "../helper/getValueByLabel";

export const Ul = ({ labels = [], className = "", userData, ...props }) => {
  console.log("ul", userData);

  return (
    <ul className={`row list-unstyled ${className} ${props}`}>
      {labels.map((label, index) => (
        <li className="col-12 col-md-6 col-lg-4 " key={index}>
          <span className="text-muted fs-5 d-block">{`${label} :-`}</span>
          {getValueByLabel(label, userData)}
        </li>
      ))}
    </ul>
  );
};
