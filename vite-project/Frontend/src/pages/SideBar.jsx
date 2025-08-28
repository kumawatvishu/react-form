import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaMapMarked, FaSitemap } from "react-icons/fa";
import {
  PiBuildingApartmentFill,
  PiInvoiceLight,
  PiUserSwitch,
} from "react-icons/pi";
import {
  LuBadgeIndianRupee,
  LuBookOpenText,
  LuBrainCog,
  LuFilePen,
  LuMapPinHouse,
} from "react-icons/lu";
import { MdEventNote, MdOutlineRequestQuote, MdTask } from "react-icons/md";
import { TbCalendarCog, TbMapCog } from "react-icons/tb";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FcLeave } from "react-icons/fc";
import { LiaUserClockSolid } from "react-icons/lia";
import { BsTicketDetailed } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { RiBillLine, RiFileTransferFill } from "react-icons/ri";
import { GiShakingHands, GiVendingMachine } from "react-icons/gi";

function SideBar() {
  const location = useLocation();

  return (
    <aside className="sidebar-wrapper" id="sideWrapper">
      <div className="sidebar-content">
        <Link className="navbar-brand" to="/">
          <img
            className="main-logo"
            src="../../assets/image/Shreenath-White-Logo.png"
            alt="main-logo"
          />
        </Link>

        <div className="sidebar-inner">
          <nav className="aside-nav">
            <ul className="sidebar-vertical">
              <li>
                <Link
                  to="/dashboard"
                  className={`drop-link ${
                    location.pathname === "/dashboard" ? "active" : ""
                  }`}
                >
                  <FaHome />
                  <span>Dashboard</span>
                </Link>
              </li>

              <li>
                <span className="menu-title border-top pt-3">HRM</span>
              </li>

              <li>
                <span className="menu-title border-top pt-3"> Sites </span>
              </li>
              <li>
                <a className="drop-link btn-menu" role="button">
                  <span className="menu-title border-0 p-0 m-0"> O&amp;M </span>
                  <svg
                    className="chevron ms-auto dropdown"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005"
                      stroke="#818898"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="sites.html" className="drop-link" role="button">
                      <LuMapPinHouse />
                      <span>Sites</span>
                    </a>
                  </li>
                  <li>
                    <a href="tasks.html" className="drop-link" role="button">
                      <MdTask />
                      <span>Tasks</span>
                    </a>
                  </li>
                  <li>
                    <a className="drop-link btn-menu" role="button">
                      <LuBrainCog />
                      <span>Operations</span>
                      <svg
                        className="chevron ms-auto dropdown"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005"
                          stroke="#818898"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <ul className="sub-menu inner" style={{ display: "none" }}>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="drop-link inner"
                          role="button"
                        >
                          <span>Plant Status</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="drop-link inner"
                          role="button"
                        >
                          <span>Manage Invertors</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="drop-link inner"
                          role="button"
                        >
                          <span>Daily Checklist</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="drop-link inner"
                          role="button"
                        >
                          <span>Generations</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="site-assets.html"
                      className="drop-link"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={18}
                        height={18}
                        x={0}
                        y={0}
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        className=""
                      >
                        <g>
                          <path
                            d="M499.007 294.117c-10.655-18.439-34.318-24.775-52.748-14.126l-114.705 66.197c.382-1.026.72-2.08 1.011-3.161 4.974-18.57-6.085-37.732-24.654-42.717L194.33 269.864c-10.257-3.292-22.818-1.986-32.073 3.353l-78.742 45.45-6.421-11.121c-6.36-10.979-20.472-14.759-31.458-8.417l-25.994 15.023c-10.995 6.348-14.775 20.459-8.428 31.459L85 473.424c3.072 5.324 8.047 9.133 14.008 10.726 1.989.532 4.006.794 6.007.794 3.99 0 7.92-1.045 11.447-3.089l26.013-15.018c5.311-3.056 9.115-8.021 10.711-13.979 1.593-5.946.788-12.144-2.271-17.46l-6.419-11.117 10.946-6.32c5.09-2.942 7.077-2.879 14.748-1.167l113.278 30.343a47.348 47.348 0 0 0 12.273 1.625c8.236 0 16.393-2.171 23.767-6.421l165.342-95.469c8.912-5.14 15.297-13.472 17.978-23.46s1.324-20.393-3.819-29.294zM137.714 448.714c-.486 1.817-1.633 3.323-3.238 4.247l-26.033 15.03c-1.603.929-3.485 1.171-5.301.686a6.96 6.96 0 0 1-4.271-3.259L25.084 337.604c-1.934-3.352-.783-7.652 2.566-9.585l25.994-15.023a6.963 6.963 0 0 1 3.489-.936 7.04 7.04 0 0 1 6.096 3.502l73.809 127.832c.924 1.607 1.164 3.496.676 5.319zm349.644-129.455c-1.571 5.856-5.304 10.735-10.514 13.739l-165.339 95.468c-7.336 4.227-15.822 5.365-23.892 3.199l-113.442-30.387a9.005 9.005 0 0 0-.324-.08c-9.323-2.084-16.199-3.011-26.417 2.893l-10.944 6.318-44.963-77.875 78.738-45.448c5.381-3.105 13.315-3.903 19.292-1.937.142.046.284.089.428.127l113.78 30.5c10.042 2.696 16.023 13.06 13.336 23.094-2.651 9.846-12.607 15.465-22.67 12.796l-.044-.009-85.511-22.641a8.008 8.008 0 0 0-4.1 15.482l85.861 22.733.027.005 13.302 3.54c10.086 2.662 15.804.716 28.979-6.901l121.325-70.018c10.79-6.231 24.637-2.522 30.872 8.27 3.001 5.194 3.789 11.277 2.218 17.13zM88.541 160.06l13.536 3.081a84.112 84.112 0 0 0 4.335 10.457l-7.387 11.739c-4.763 7.541-4.327 15.926 1.108 21.362l11.707 11.707c5.435 5.435 13.818 5.871 21.346 1.119l11.779-7.399a84.145 84.145 0 0 0 10.459 4.336l3.076 13.536c1.944 8.693 8.172 14.31 15.865 14.31h16.582c7.771 0 13.857-5.464 15.888-14.283l3.083-13.562a83.691 83.691 0 0 0 4.854-1.83v40.546c0 10.621 8.653 19.261 19.29 19.261h100.205c10.636 0 19.289-8.641 19.289-19.261v-10.98c1.045.068 2.106.109 3.189.109h92.892c15.758 0 27.392-7.225 33.646-20.895 9.106-19.903 3.729-47.207-.286-61.711-5.305-19.161-14.163-37.973-24.357-52.118 2.974-3.806 4.731-9.267 4.731-15.555 0-5.871-1.636-13.486-6.148-17.81 9.812-15.479 14.496-34.227 7.041-43.484-3.296-4.093-11.227-9.526-27.3.083l-8.455 5.062c-.978.581-1.65.911-2.081 1.097a3.494 3.494 0 0 0-.055-.031l-12.267-6.903c-4.085-2.276-7.572-3.284-10.935-3.129-3.341-.143-6.912.889-10.922 3.144l-12.226 6.877-.076.043c-.426-.184-1.09-.511-2.053-1.086l-8.483-5.079c-16.102-9.614-24.034-4.16-27.33-.055-7.469 9.307-2.735 28.097 7.142 43.596-.093.087-.191.165-.282.255-3.786 3.757-5.958 10.106-5.958 17.419 0 5.764 1.441 10.8 3.912 14.515-4.053 5.571-7.891 11.909-11.399 18.832l-35.988-36.401c-4.107-4.15-9.557-6.436-15.345-6.435-5.788 0-11.237 2.286-15.346 6.438l-9.021 9.125c-.298-.644-.586-1.294-.9-1.93l7.392-11.746c4.763-7.541 4.328-15.926-1.108-21.362l-11.707-11.707c-5.435-5.436-13.82-5.87-21.352-1.115l-11.768 7.406a87.638 87.638 0 0 0-10.434-4.33l-3.087-13.562c-2.019-8.821-8.105-14.3-15.886-14.3h-16.582c-7.702 0-13.931 5.632-15.859 14.309l-3.084 13.552a86.761 86.761 0 0 0-10.443 4.33l-11.777-7.398c-7.542-4.763-15.927-4.326-21.361 1.108l-11.707 11.707c-5.437 5.436-5.871 13.821-1.119 21.346l7.399 11.779a84.178 84.178 0 0 0-4.337 10.461l-13.496 3.072c-8.717 1.938-14.349 8.166-14.349 15.868v16.583c0 7.78 5.479 13.867 14.309 15.887zm207.275 98.364h-23.301v-34.625c0-6.416 5.232-11.636 11.664-11.636s11.637 5.22 11.637 11.636zm64.267-159.006c-.419-.764-1.082-2.529-1.082-5.389 0-1.93.271-3.409.572-4.435 28.037 5.711 56.647 5.689 87.212-.066.309 1.121.571 2.66.571 4.501 0 2.957-.714 4.721-1.131 5.429-26.498 5.932-55.452 5.922-86.143-.04zm-5.686-55.856c1.098.208 3.249.879 6.797 2.998l8.482 5.078c8.275 4.943 13.115 4.137 18.24 1.233l12.186-6.855c1.455-.818 2.227-1.037 2.465-1.09l.604.062.629-.064c.23.049.986.258 2.481 1.091l11.785 6.629.356.203c5.113 2.924 9.954 3.745 18.292-1.215l8.472-5.071c3.534-2.113 5.681-2.788 6.779-2.999.777 4.656-3.093 19.063-13.445 31.148-24.609 4.092-47.842 4.146-70.538.161-10.468-12.13-14.378-26.636-13.586-31.309zm6.962 72.376c14.865 2.647 29.379 3.979 43.458 3.979 13.372 0 26.349-1.209 38.869-3.595 20.376 26.407 35.873 76.737 25.033 100.429-3.603 7.875-9.666 11.542-19.082 11.542h-92.892a31.52 31.52 0 0 1-3.189-.173v-30.413c8.781-.07 16.325-5.13 19.717-13.242 3.418-8.175 1.67-17.177-4.568-23.498l-21.269-21.513c4.164-9.002 8.897-16.995 13.922-23.515zm-81.154-13.697c1.075-1.086 2.481-1.685 3.959-1.685s2.886.599 3.959 1.683l69.188 69.982c2.359 2.391 1.616 5.039 1.187 6.065-.429 1.024-1.784 3.405-5.124 3.405h-7.824a8.008 8.008 0 0 0-8.008 8.008v65.48c0 1.759-1.499 3.246-3.273 3.246h-22.437V223.8c0-15.248-12.404-27.652-27.652-27.652S256.5 208.552 256.5 223.8v34.625h-22.437c-1.774 0-3.274-1.486-3.274-3.246v-65.48a8.008 8.008 0 0 0-8.008-8.008h-7.823c-3.34 0-4.695-2.381-5.124-3.405a6.083 6.083 0 0 1-.421-1.62c-.145-1.252.082-2.899 1.602-4.44l22.489-22.747.017-.017 46.686-47.221zm-97.534 71.428c-20.844 0-37.801-16.944-37.801-37.772s16.957-37.8 37.801-37.8 37.771 16.957 37.771 37.8c0 1.398-.092 2.829-.256 4.272l-20.567 20.803c-3.115 3.157-5.11 6.984-5.899 11.044a37.62 37.62 0 0 1-11.049 1.653zm-92.424-45.627c.31-.196.906-.483 1.848-.692l18.057-4.11a8.007 8.007 0 0 0 5.946-5.692 68.118 68.118 0 0 1 6.519-15.726 8.005 8.005 0 0 0-.176-8.225l-9.875-15.72c-.509-.806-.726-1.431-.806-1.789l11.102-11.101c.358.081.987.299 1.805.816l15.704 9.864a8.007 8.007 0 0 0 8.198.192 70.65 70.65 0 0 1 15.784-6.543 8.01 8.01 0 0 0 5.66-5.937l4.119-18.097c.202-.912.487-1.5.684-1.808h15.696c.199.312.492.913.706 1.848l4.11 18.057a8.01 8.01 0 0 0 5.66 5.937 71.51 71.51 0 0 1 15.802 6.552 8.01 8.01 0 0 0 8.188-.204l15.685-9.871c.806-.509 1.432-.726 1.789-.806l11.101 11.101c-.08.358-.298.986-.812 1.799l-9.864 15.675a8.007 8.007 0 0 0-.187 8.218 69.307 69.307 0 0 1 4.901 10.669l-12.274 12.415c-5.102-24.4-26.767-42.783-52.646-42.783-29.675 0-53.816 24.142-53.816 53.815s24.142 53.788 53.816 53.788c4.83 0 9.559-.631 14.137-1.878 3.657 5.782 9.724 9.4 16.693 9.844a68.076 68.076 0 0 1-12.48 4.791 8.005 8.005 0 0 0-5.692 5.948l-4.105 18.063c-.215.933-.508 1.53-.706 1.839h-15.706c-.195-.306-.48-.894-.688-1.817l-4.11-18.085a8.007 8.007 0 0 0-5.692-5.948 68.11 68.11 0 0 1-15.725-6.519 8.012 8.012 0 0 0-8.226.176l-15.721 9.875c-.805.508-1.431.726-1.788.805l-11.101-11.101c.08-.358.298-.986.812-1.799l9.864-15.676a8.008 8.008 0 0 0 .18-8.23 68.143 68.143 0 0 1-6.519-15.726 8.009 8.009 0 0 0-5.946-5.692l-18.048-4.108c-.941-.215-1.544-.509-1.856-.708v-15.697zm288.51 31.751c0-9.095 6.769-16.62 16.413-19.334v-2.492c0-4.423 3.585-8.008 8.008-8.008s8.008 3.585 8.008 8.008v2.535c6.923 1.995 12.567 6.507 15.056 12.461a8.008 8.008 0 0 1-14.776 6.178c-.652-1.559-3.654-3.755-8.288-3.755-5.053 0-8.405 2.653-8.405 4.408 0 1.906 0 2.776 9.827 4.55 8.037 1.451 22.998 4.151 22.998 20.31 0 9.095-6.769 16.62-16.412 19.335v2.492c0 4.423-3.585 8.008-8.008 8.008s-8.008-3.585-8.008-8.008v-2.51c-6.097-1.732-11.174-5.421-14.057-10.473a8.008 8.008 0 0 1 13.912-7.935c.992 1.739 4.111 3.5 8.152 3.5 5.053 0 8.404-2.653 8.404-4.408 0-1.906 0-2.775-9.827-4.549-8.037-1.451-22.998-4.151-22.998-20.311zM254.94 164.3a8.008 8.008 0 0 1 8.008-8.008h42.69c4.423 0 8.008 3.585 8.008 8.008s-3.585 8.008-8.008 8.008h-42.69a8.008 8.008 0 0 1-8.008-8.008z"
                            fill="#000000"
                            opacity={1}
                            data-original="#000000"
                          />
                        </g>
                      </svg>
                      <span>Site Assets</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="drop-link btn-menu" role="button">
                  <span className="menu-title border-0 p-0 m-0"> Project </span>
                  <svg
                    className="chevron ms-auto dropdown"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005"
                      stroke="#818898"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="sites.html" className="drop-link" role="button">
                      <LuMapPinHouse />
                      <span>Sites</span>
                    </a>
                  </li>
                  <li>
                    <a href="tasks.html" className="drop-link" role="button">
                      <MdTask />
                      <span>Tasks</span>
                    </a>
                  </li>
                  <li>
                    <a className="drop-link btn-menu" role="button">
                      <LuBrainCog />
                      <span>Operations</span>
                      <svg
                        className="chevron ms-auto dropdown"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005"
                          stroke="#818898"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <ul className="sub-menu inner" style={{ display: "none" }}>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="drop-link inner"
                          role="button"
                        >
                          <span>Plant Status</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="drop-link inner"
                          role="button"
                        >
                          <span>Manage Invertors</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="drop-link inner"
                          role="button"
                        >
                          <span>Daily Checklist</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="drop-link inner"
                          role="button"
                        >
                          <span>Generations</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="site-assets.html"
                      className="drop-link"
                      role="button"
                    >
                      <TbMapCog />
                      <span>Site Assets</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="drop-link btn-menu" role="button">
                  <span className="menu-title border-0 p-0 m-0">
                    Site Settings
                  </span>
                  <svg
                    className="chevron ms-auto dropdown"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005"
                      stroke="#818898"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="assets.html" className="drop-link" role="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={18}
                        height={18}
                        x={0}
                        y={0}
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                        className=""
                      >
                        <g>
                          <path
                            d="M499.007 294.117c-10.655-18.439-34.318-24.775-52.748-14.126l-114.705 66.197c.382-1.026.72-2.08 1.011-3.161 4.974-18.57-6.085-37.732-24.654-42.717L194.33 269.864c-10.257-3.292-22.818-1.986-32.073 3.353l-78.742 45.45-6.421-11.121c-6.36-10.979-20.472-14.759-31.458-8.417l-25.994 15.023c-10.995 6.348-14.775 20.459-8.428 31.459L85 473.424c3.072 5.324 8.047 9.133 14.008 10.726 1.989.532 4.006.794 6.007.794 3.99 0 7.92-1.045 11.447-3.089l26.013-15.018c5.311-3.056 9.115-8.021 10.711-13.979 1.593-5.946.788-12.144-2.271-17.46l-6.419-11.117 10.946-6.32c5.09-2.942 7.077-2.879 14.748-1.167l113.278 30.343a47.348 47.348 0 0 0 12.273 1.625c8.236 0 16.393-2.171 23.767-6.421l165.342-95.469c8.912-5.14 15.297-13.472 17.978-23.46s1.324-20.393-3.819-29.294zM137.714 448.714c-.486 1.817-1.633 3.323-3.238 4.247l-26.033 15.03c-1.603.929-3.485 1.171-5.301.686a6.96 6.96 0 0 1-4.271-3.259L25.084 337.604c-1.934-3.352-.783-7.652 2.566-9.585l25.994-15.023a6.963 6.963 0 0 1 3.489-.936 7.04 7.04 0 0 1 6.096 3.502l73.809 127.832c.924 1.607 1.164 3.496.676 5.319zm349.644-129.455c-1.571 5.856-5.304 10.735-10.514 13.739l-165.339 95.468c-7.336 4.227-15.822 5.365-23.892 3.199l-113.442-30.387a9.005 9.005 0 0 0-.324-.08c-9.323-2.084-16.199-3.011-26.417 2.893l-10.944 6.318-44.963-77.875 78.738-45.448c5.381-3.105 13.315-3.903 19.292-1.937.142.046.284.089.428.127l113.78 30.5c10.042 2.696 16.023 13.06 13.336 23.094-2.651 9.846-12.607 15.465-22.67 12.796l-.044-.009-85.511-22.641a8.008 8.008 0 0 0-4.1 15.482l85.861 22.733.027.005 13.302 3.54c10.086 2.662 15.804.716 28.979-6.901l121.325-70.018c10.79-6.231 24.637-2.522 30.872 8.27 3.001 5.194 3.789 11.277 2.218 17.13zM88.541 160.06l13.536 3.081a84.112 84.112 0 0 0 4.335 10.457l-7.387 11.739c-4.763 7.541-4.327 15.926 1.108 21.362l11.707 11.707c5.435 5.435 13.818 5.871 21.346 1.119l11.779-7.399a84.145 84.145 0 0 0 10.459 4.336l3.076 13.536c1.944 8.693 8.172 14.31 15.865 14.31h16.582c7.771 0 13.857-5.464 15.888-14.283l3.083-13.562a83.691 83.691 0 0 0 4.854-1.83v40.546c0 10.621 8.653 19.261 19.29 19.261h100.205c10.636 0 19.289-8.641 19.289-19.261v-10.98c1.045.068 2.106.109 3.189.109h92.892c15.758 0 27.392-7.225 33.646-20.895 9.106-19.903 3.729-47.207-.286-61.711-5.305-19.161-14.163-37.973-24.357-52.118 2.974-3.806 4.731-9.267 4.731-15.555 0-5.871-1.636-13.486-6.148-17.81 9.812-15.479 14.496-34.227 7.041-43.484-3.296-4.093-11.227-9.526-27.3.083l-8.455 5.062c-.978.581-1.65.911-2.081 1.097a3.494 3.494 0 0 0-.055-.031l-12.267-6.903c-4.085-2.276-7.572-3.284-10.935-3.129-3.341-.143-6.912.889-10.922 3.144l-12.226 6.877-.076.043c-.426-.184-1.09-.511-2.053-1.086l-8.483-5.079c-16.102-9.614-24.034-4.16-27.33-.055-7.469 9.307-2.735 28.097 7.142 43.596-.093.087-.191.165-.282.255-3.786 3.757-5.958 10.106-5.958 17.419 0 5.764 1.441 10.8 3.912 14.515-4.053 5.571-7.891 11.909-11.399 18.832l-35.988-36.401c-4.107-4.15-9.557-6.436-15.345-6.435-5.788 0-11.237 2.286-15.346 6.438l-9.021 9.125c-.298-.644-.586-1.294-.9-1.93l7.392-11.746c4.763-7.541 4.328-15.926-1.108-21.362l-11.707-11.707c-5.435-5.436-13.82-5.87-21.352-1.115l-11.768 7.406a87.638 87.638 0 0 0-10.434-4.33l-3.087-13.562c-2.019-8.821-8.105-14.3-15.886-14.3h-16.582c-7.702 0-13.931 5.632-15.859 14.309l-3.084 13.552a86.761 86.761 0 0 0-10.443 4.33l-11.777-7.398c-7.542-4.763-15.927-4.326-21.361 1.108l-11.707 11.707c-5.437 5.436-5.871 13.821-1.119 21.346l7.399 11.779a84.178 84.178 0 0 0-4.337 10.461l-13.496 3.072c-8.717 1.938-14.349 8.166-14.349 15.868v16.583c0 7.78 5.479 13.867 14.309 15.887zm207.275 98.364h-23.301v-34.625c0-6.416 5.232-11.636 11.664-11.636s11.637 5.22 11.637 11.636zm64.267-159.006c-.419-.764-1.082-2.529-1.082-5.389 0-1.93.271-3.409.572-4.435 28.037 5.711 56.647 5.689 87.212-.066.309 1.121.571 2.66.571 4.501 0 2.957-.714 4.721-1.131 5.429-26.498 5.932-55.452 5.922-86.143-.04zm-5.686-55.856c1.098.208 3.249.879 6.797 2.998l8.482 5.078c8.275 4.943 13.115 4.137 18.24 1.233l12.186-6.855c1.455-.818 2.227-1.037 2.465-1.09l.604.062.629-.064c.23.049.986.258 2.481 1.091l11.785 6.629.356.203c5.113 2.924 9.954 3.745 18.292-1.215l8.472-5.071c3.534-2.113 5.681-2.788 6.779-2.999.777 4.656-3.093 19.063-13.445 31.148-24.609 4.092-47.842 4.146-70.538.161-10.468-12.13-14.378-26.636-13.586-31.309zm6.962 72.376c14.865 2.647 29.379 3.979 43.458 3.979 13.372 0 26.349-1.209 38.869-3.595 20.376 26.407 35.873 76.737 25.033 100.429-3.603 7.875-9.666 11.542-19.082 11.542h-92.892a31.52 31.52 0 0 1-3.189-.173v-30.413c8.781-.07 16.325-5.13 19.717-13.242 3.418-8.175 1.67-17.177-4.568-23.498l-21.269-21.513c4.164-9.002 8.897-16.995 13.922-23.515zm-81.154-13.697c1.075-1.086 2.481-1.685 3.959-1.685s2.886.599 3.959 1.683l69.188 69.982c2.359 2.391 1.616 5.039 1.187 6.065-.429 1.024-1.784 3.405-5.124 3.405h-7.824a8.008 8.008 0 0 0-8.008 8.008v65.48c0 1.759-1.499 3.246-3.273 3.246h-22.437V223.8c0-15.248-12.404-27.652-27.652-27.652S256.5 208.552 256.5 223.8v34.625h-22.437c-1.774 0-3.274-1.486-3.274-3.246v-65.48a8.008 8.008 0 0 0-8.008-8.008h-7.823c-3.34 0-4.695-2.381-5.124-3.405a6.083 6.083 0 0 1-.421-1.62c-.145-1.252.082-2.899 1.602-4.44l22.489-22.747.017-.017 46.686-47.221zm-97.534 71.428c-20.844 0-37.801-16.944-37.801-37.772s16.957-37.8 37.801-37.8 37.771 16.957 37.771 37.8c0 1.398-.092 2.829-.256 4.272l-20.567 20.803c-3.115 3.157-5.11 6.984-5.899 11.044a37.62 37.62 0 0 1-11.049 1.653zm-92.424-45.627c.31-.196.906-.483 1.848-.692l18.057-4.11a8.007 8.007 0 0 0 5.946-5.692 68.118 68.118 0 0 1 6.519-15.726 8.005 8.005 0 0 0-.176-8.225l-9.875-15.72c-.509-.806-.726-1.431-.806-1.789l11.102-11.101c.358.081.987.299 1.805.816l15.704 9.864a8.007 8.007 0 0 0 8.198.192 70.65 70.65 0 0 1 15.784-6.543 8.01 8.01 0 0 0 5.66-5.937l4.119-18.097c.202-.912.487-1.5.684-1.808h15.696c.199.312.492.913.706 1.848l4.11 18.057a8.01 8.01 0 0 0 5.66 5.937 71.51 71.51 0 0 1 15.802 6.552 8.01 8.01 0 0 0 8.188-.204l15.685-9.871c.806-.509 1.432-.726 1.789-.806l11.101 11.101c-.08.358-.298.986-.812 1.799l-9.864 15.675a8.007 8.007 0 0 0-.187 8.218 69.307 69.307 0 0 1 4.901 10.669l-12.274 12.415c-5.102-24.4-26.767-42.783-52.646-42.783-29.675 0-53.816 24.142-53.816 53.815s24.142 53.788 53.816 53.788c4.83 0 9.559-.631 14.137-1.878 3.657 5.782 9.724 9.4 16.693 9.844a68.076 68.076 0 0 1-12.48 4.791 8.005 8.005 0 0 0-5.692 5.948l-4.105 18.063c-.215.933-.508 1.53-.706 1.839h-15.706c-.195-.306-.48-.894-.688-1.817l-4.11-18.085a8.007 8.007 0 0 0-5.692-5.948 68.11 68.11 0 0 1-15.725-6.519 8.012 8.012 0 0 0-8.226.176l-15.721 9.875c-.805.508-1.431.726-1.788.805l-11.101-11.101c.08-.358.298-.986.812-1.799l9.864-15.676a8.008 8.008 0 0 0 .18-8.23 68.143 68.143 0 0 1-6.519-15.726 8.009 8.009 0 0 0-5.946-5.692l-18.048-4.108c-.941-.215-1.544-.509-1.856-.708v-15.697zm288.51 31.751c0-9.095 6.769-16.62 16.413-19.334v-2.492c0-4.423 3.585-8.008 8.008-8.008s8.008 3.585 8.008 8.008v2.535c6.923 1.995 12.567 6.507 15.056 12.461a8.008 8.008 0 0 1-14.776 6.178c-.652-1.559-3.654-3.755-8.288-3.755-5.053 0-8.405 2.653-8.405 4.408 0 1.906 0 2.776 9.827 4.55 8.037 1.451 22.998 4.151 22.998 20.31 0 9.095-6.769 16.62-16.412 19.335v2.492c0 4.423-3.585 8.008-8.008 8.008s-8.008-3.585-8.008-8.008v-2.51c-6.097-1.732-11.174-5.421-14.057-10.473a8.008 8.008 0 0 1 13.912-7.935c.992 1.739 4.111 3.5 8.152 3.5 5.053 0 8.404-2.653 8.404-4.408 0-1.906 0-2.775-9.827-4.549-8.037-1.451-22.998-4.151-22.998-20.311zM254.94 164.3a8.008 8.008 0 0 1 8.008-8.008h42.69c4.423 0 8.008 3.585 8.008 8.008s-3.585 8.008-8.008 8.008h-42.69a8.008 8.008 0 0 1-8.008-8.008z"
                            fill="#000000"
                            opacity={1}
                            data-original="#000000"
                          />
                        </g>
                      </svg>
                      <span>Assets</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span className="menu-title border-top pt-3"> HRM </span>
              </li>
              <li>
                <a href="attendance.html" className="drop-link" role="button">
                  <FaRegCalendarDays />
                  <span>Attendance</span>
                </a>
              </li>
              <li>
                <a href="leave.html" className="drop-link" role="button">
                  <FcLeave />
                  <span>Leave</span>
                </a>
              </li>
              <li>
                <a
                  href="attendance-regularization-requests.html"
                  className="drop-link"
                  role="button"
                >
                  <FaRegCalendarDays />
                  <span>Att. Regularization</span>
                </a>
              </li>
              <li>
                <a
                  href="outdoor-duty-request.html"
                  className="drop-link"
                  role="button"
                >
                  <LuBadgeIndianRupee color="blue" />
                  <span>OD Application</span>
                </a>
              </li>
              <li>
                <a href="pay-slip.html" className="drop-link" role="button">
                  <PiInvoiceLight />
                  <span>Pay slip</span>
                </a>
              </li>
              <li>
                <a href="Reports.html" className="drop-link" role="button">
                  <LuFilePen />
                  <span>Reports</span>
                </a>
              </li>
              <li>
                <a className="drop-link btn-menu" role="button">
                  <span className="menu-title border-0 p-0 m-0">
                    HRM Settings
                  </span>
                  <svg
                    className="chevron ms-auto dropdown"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005"
                      stroke="#818898"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="shift-time-configuration.html"
                      className="drop-link"
                      role="button"
                    >
                      <LiaUserClockSolid />
                      <span>Shift &amp; Time Config</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="employee-onboard.html"
                      className="drop-link"
                      role="button"
                    >
                      <FaSitemap />
                      <span>Employee Onboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="holidays.html" className="drop-link" role="button">
                      <TbCalendarCog />
                      <span> Holiday Setting </span>
                    </a>
                  </li>
                  <li>
                    <a href="office.html" className="drop-link" role="button">
                      <FaMapMarked />
                      <span> Office Location </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="leave-setting.html"
                      className="drop-link"
                      role="button"
                    >
                      <MdEventNote />
                      <span>Leave Setting</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span className="menu-title border-top pt-3"> Accounts </span>
              </li>
              <li>
                <a href="#" className="drop-link" role="button">
                  <LuBookOpenText />
                  <span>Customer Ledger</span>
                </a>
              </li>
              <li>
                <a href="#" className="drop-link" role="button">
                  <LuBookOpenText />
                  <span>Vendor Ledger</span>
                </a>
              </li>
              <li>
                <a href="#" className="drop-link" role="button">
                  <BsTicketDetailed />
                  <span>Voucher</span>
                </a>
              </li>
              <li>
                <a className="drop-link btn-menu" role="button">
                  <span className="menu-title border-0 p-0 m-0">
                    Account Settings
                  </span>
                  <svg
                    className="chevron ms-auto dropdown"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6.4001 8.20005L10.0001 11.8L13.6001 8.20005"
                      stroke="#818898"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="expence-head.html"
                      className="drop-link"
                      role="button"
                    >
                      <span>vendor list</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="expence-head.html"
                      className="drop-link"
                      role="button"
                    >
                      <span>Customer list</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="expence-head.html"
                      className="drop-link"
                      role="button"
                    >
                      <span>Expense Head</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="expence-head.html"
                      className="drop-link"
                      role="button"
                    >
                      <span>Work Order</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span className="menu-title pt-3 border-top">Supply Chain</span>
              </li>
              <li>
                <a href="sites.html" className="drop-link" role="button">
                  <SlBookOpen />
                  <span>Purchase Book</span>
                </a>
              </li>
              <li>
                <a
                  href="purchase-order.html"
                  className="drop-link"
                  role="button"
                >
                  <RiBillLine />
                  <span>Purchase Bill</span>
                </a>
              </li>
              <li>
                <a href="sites.html" className="drop-link" role="button">
                  <PiBuildingApartmentFill />
                  <span>Stock</span>
                </a>
              </li>
              <li>
                <a
                  href="request-material.html"
                  className="drop-link"
                  role="button"
                >
                  <MdOutlineRequestQuote />
                  <span>Request Material</span>
                </a>
              </li>
              <li>
                <a
                  href="add-machinery.html"
                  className="drop-link"
                  role="button"
                >
                  <GiVendingMachine />
                  <span>Machinery</span>
                </a>
              </li>
              <li>
                <a href="sites.html" className="drop-link" role="button">
                  <RiFileTransferFill />
                  <span>Transfer Assets</span>
                </a>
              </li>
              <li>
                <a href="item-master.html" className="drop-link" role="button">
                  <GiShakingHands />
                  <span>Item Master</span>
                </a>
              </li>
              <li>
                <a
                  href="../pages(User)/switch-user.html"
                  className="drop-link"
                  role="button"
                >
                  <PiUserSwitch />
                  <span>Switch User</span>
                </a>
              </li>
            </ul>
          </nav>{" "}
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
