import React from "react";

const TableFooter = () => {
  return (
    <div className="table-footer">
      <div className="sorted">
        <div
          className="dropdown border rounded"
          style={{
            height: "35px",
            display: "flex",
            justifyContent: "center",
            margin: "5px",
            padding: "5px",
            alignItems: "center",
          }}
        >
          <button
            className="btn dropdown-toggle fs-5"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            30
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M6.40039 8.19922L10.0004 11.7992L13.6004 8.19922"
                  stroke="#36394A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <ul className="dropdown-menu shadow-lg">
            <li>
              <a className="dropdown-item" href="#">
                10
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                20
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                30
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                40
              </a>
            </li>
          </ul>
        </div>
        <span
          className="mb-0 text-muted fw-medium text-uppercase "
          style={{ fontSize: "12px" }}
        >
          Showing 11 to 19 of 19 entries
        </span>
      </div>
      <div className="">
        <ul
          className="pagination d-flex"
          style={{ listStyle: "none", margin: "5px" }}
        >
          <li className=" ">
            <a className="" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className=" ">
            <a className="" href="#" aria-label="Previous">
              <span aria-hidden="true">⟨</span>
            </a>
          </li>
          <li className=" my-box-shadow ">
            <a className="active " href="#">
              1
            </a>
          </li>
          <li className=" ">
            <a className="" href="#">
              2
            </a>
          </li>
          <li className=" ">
            <a className="" href="#">
              3
            </a>
          </li>
          <li className=" ">
            <a className="" href="#" aria-label="Next">
              <span aria-hidden="true"> ⟩</span>
            </a>
          </li>
          <li className=" ">
            <a className="" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableFooter;
