import React from "react";
import "./navbar.scss";
import { useNavigate, useLocation } from "react-router-dom";
import avatar from "../../assets/Images/profile.png";
import navlogo from "../../assets/Images/navbarLogo.png";
import { encryptStorage } from "../../helper/storage";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navbarArr = [
    { name: "Attendance", link: "/attendance" },
    { name: "Roster", link: "/roster" },
  ];

  return (
    <div className="navbar_wrapper">
      <div className="navbar_subwrapper">
        <div className="navbar_lhs">
          <img className="navbar_logo" src={navlogo}></img>
        </div>
        <ul className="navbar_ul">
          {navbarArr.map((item) => {
            return (
              <li
                key={item.link}
                className={
                  location.pathname === item.link
                    ? "active navbar_title"
                    : "navbar_title"
                }
                onClick={() => {
                  navigate(item.link);
                }}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <div className="navbar_rhs">
          <div className="user_info">
            <p className="username_">Username</p>
            <p className="role_">Role</p>
          </div>
          <img className="avatar_image" src={avatar} alt="user_image" />
          <Logout
            style={{ cursor: "pointer", fill: "#605f6d" }}
            onClick={() => {
              encryptStorage.removeItem("UID");
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}

const Logout = (props) => (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    viewBox="0 0 52 52"
    enableBackground="new 0 0 52 52"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path d="M21,48.5v-3c0-0.8-0.7-1.5-1.5-1.5h-10C8.7,44,8,43.3,8,42.5v-33C8,8.7,8.7,8,9.5,8h10 C20.3,8,21,7.3,21,6.5v-3C21,2.7,20.3,2,19.5,2H6C3.8,2,2,3.8,2,6v40c0,2.2,1.8,4,4,4h13.5C20.3,50,21,49.3,21,48.5z" />
      <path d="M49.6,27c0.6-0.6,0.6-1.5,0-2.1L36.1,11.4c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l5.6,5.6 c0.6,0.6,0.2,1.7-0.7,1.7H15.5c-0.8,0-1.5,0.6-1.5,1.4v3c0,0.8,0.7,1.6,1.5,1.6h21.2c0.9,0,1.3,1.1,0.7,1.7l-5.6,5.6 c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L49.6,27z" />
    </g>
  </svg>
);

export const LoadingText = () => (
  <section className="loading_text">
    <div className="loading loading03">
      <span className="_text_">L</span>
      <span className="_text_">O</span>
      <span className="_text_">A</span>
      <span className="_text_">D</span>
      <span className="_text_">I</span>
      <span className="_text_">N</span>
      <span className="_text_">G</span>
    </div>
  </section>
);
