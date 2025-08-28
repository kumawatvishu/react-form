import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HeadingItems({
  heading,
  title,
  icon,
  navigateto,
  reversebutton,
  navigatetoreverse,
}) {
  const navigete = useNavigate();

  const haldlereverse = () => {
    navigete(navigatetoreverse);
  };
  return (
    <div className="content-head mb-5 d-flex align-items-start justify-content-between">
      {reversebutton && (
        <div className="d-flex align-items-center justify-content-start gap-4">
          <button onClick={haldlereverse} className="btn back-arrow">
            {reversebutton}
          </button>
          <h1 className="mb-0 gap1">{heading}</h1>
        </div>
      )}
      {title && (
        <>
          <h1 className="mb-0 gap1">{heading}</h1>
          <div className="d-flex align-items-center gap-3">
            <Link to={navigateto} className="btn btn-outline-primary px-5">
              {icon}
              {title}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default HeadingItems;
