import React from "react";

const TableNavs = () => {
  return (
    <nav>
      <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
        <button
          className="btn btn-outline-primary px-5 rounded-0 rounded-start-2 border border-primary active"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab-one"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          tabIndex={-1}
        >
          Office Staff
        </button>
        <button
          className="btn btn-outline-primary px-5 rounded-0 rounded-end-2 border border-primary"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#tab-two"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
        >
          Site Staff
        </button>
      </div>
    </nav>
  );
};

export default TableNavs;
