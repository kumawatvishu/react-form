import React from "react";
import { Input } from "../../ui/Input";
import { Select } from "../../ui/Select";
import { CiSearch } from "react-icons/ci";

const TableHeader = ({ downloadData, query, setQuery }) => {
  const companiesOptions = [
    { value: "abcd", label: "ABCD" },
    { value: "0&m", label: "S.NATH 0&M PRIVATE LIMITED " },
    { value: "divanshukachhawa", label: "divanshukachhawa7878@gmail.com" },
    { value: "renewables", label: "S.NATH RENEWABLES ENRGY PRIVATE LIMITED " },
    {
      value: "sustainable",
      label: "S.NATH SUSTAINABLE SOLUTIONS PRIVATE LIMITED ",
    },
    { value: "iwebwiser", label: "iWebwiser Bikaner " },
  ];

  return (
    <div className="table-head d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
      <div className="position-relative">
        <Input
          type="text"
          className="form-control search-control"
          id="searchUsers"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          icon={<CiSearch size={18} />}
        />
      </div>
      <div className="d-flex align-items-stretch justify-content-end gap-3">
        <div className="col-12 col-lg-6">
          <Select placeholder="All Companies" options={companiesOptions} />
        </div>
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={downloadData}
        >
          Export
        </button>
        <button
          className="btn btn-outline-primary border border-primary"
          data-bs-target="#filteroffcanvas"
          data-bs-toggle="offcanvas"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            height={9}
            viewBox="0 0 14 9"
            fill="none"
          >
            <path
              d="M5.55556 8.5H8.44444V7.16667H5.55556V8.5ZM0.5 0.5V1.83333H13.5V0.5H0.5ZM2.66667 5.16667H11.3333V3.83333H2.66667V5.16667Z"
              fill="#3085FE"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TableHeader;
