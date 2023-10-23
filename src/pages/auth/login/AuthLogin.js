import React, { useEffect, useState } from "react";
import "./login.scss";
import Button from "../../../components/Button/Button";
import InputBox from "../../../components/InputBox/InputBox";
import PhoneNumber from "../../../components/PhoneNumber/PhoneNumber";
import Bg from "../../../assets/Images/Bg.png";
import { useNavigate } from "react-router-dom";

export default function AuthLogin() {
  const [activeTab, setActiveTab] = useState("email");
  const [passwordType, setPasswordType] = useState("password");
  const [showErrorMsg, setShowErrorMsg] = useState("");
  const [loginData, setloginData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (activeTab === "mobile") {
      setloginData({
        phone_number: "",
        password: "",
      });
    } else {
      setloginData({
        email: "",
        password: "",
      });
    }
  }, [activeTab]);

  const postLogin = () => {
    let _res = false;

    Object.keys(loginData).map((item) => {
      if (loginData[item] === "") {
        _res = true;
      }
    });

    if (_res) {
      setShowErrorMsg("Fill all the credentials!");
      return;
    } else {
      navigate("/attendance");
    }
  };

  const handlePassword = (type) => {
    if (!type) {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };
  return (
    <div className="login_wrapper">
      {/* <div className="login_subwrapper_lhs">
          <img src={Bg} />
        </div> */}
      <div className="login_content">
        <div className="logo">logo</div>
        <div className="content_subwrapper">
          <h2 className="header_">Welcome Again!</h2>
          <div className="login_type_tab">
            <p
              className={activeTab === "email" ? "activetab" : "inactivetab"}
              onClick={() => {
                setActiveTab("email");
                setShowErrorMsg("");
              }}
            >
              Email
            </p>
            <p
              className={activeTab === "mobile" ? "activetab" : "inactivetab"}
              onClick={() => {
                setActiveTab("mobile");
                setShowErrorMsg("");
              }}
            >
              Mobile
            </p>
          </div>
          <div className="input_credential_wrapper">
            {activeTab === "email" ? (
              <div className="inputs_wrapper">
                <InputBox
                placeholder = {"abc@example.com"}
                  header={"Email"}
                  value={loginData.email}
                  onChange={(e) => {
                    setloginData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  onFocus={() => setShowErrorMsg("")}
                />
              </div>
            ) : (
              <div className="inputs_wrapper">
                <label>Phone Number </label>
                <PhoneNumber
                placeholder={"Enter your number"}
                  id="phone"
                  isEdit={true}
                  fetchedNumber={""}
                  value={""}
                  onChange={(data) => {
                    setloginData((prev) => ({
                      ...prev,
                      phone_number: data.inputNumber,
                    }));
                  }}
                  onFocus={() => setShowErrorMsg("")}
                  tabIndex="3"
                  style={{ height: "88px" }}
                />
              </div>
            )}
            <div className="inputs_wrapper">
              <InputBox
                id="Password"
                header="Password"
                placeholder={"*********"}
                type={passwordType}
                password
                typeValue={(data) => handlePassword(data)}
                onChange={(e) => {
                  setloginData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                value={loginData.password}
                onFocus={() => setShowErrorMsg("")}
              />
            </div>
          </div>
        </div>
        <p className="error_msg">{showErrorMsg}</p>
        <Button name={"Login"} onClick={() => postLogin()} />
      </div>
    </div>
  );
}
