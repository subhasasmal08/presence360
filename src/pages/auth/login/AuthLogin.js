import React, { useState } from "react";
import "./login.scss";
import Button from "../../../components/Button/Button";
import InputBox from "../../../components/InputBox/InputBox";
import PhoneNumber from "../../../components/PhoneNumber/PhoneNumber";

export default function AuthLogin() {
  const [activeTab, setActiveTab] = useState("email");
  const [passwordType, setPasswordType] = useState("password");
  const [loginData, setloginData] = useState({
    email: "",
    phone_number: "",
    password: "",
  });

  const postLogin = () => {
    let _res = false;
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
      <div className="login_subwrapper">
        <div className="login_content">
          <div className="logo">logo</div>
          <h2 className="header_">Welcome Again</h2>
          <div className="login_type_tab">
            {console.log(activeTab)}
            <p
              className={activeTab === "email" ? "activetab" : "inactivetab"}
              onClick={() => {
                setActiveTab("email");
              }}
            >
              Email
            </p>
            <p
              className={activeTab === "mobile" ? "activetab" : "inactivetab"}
              onClick={() => {
                setActiveTab("mobile");
              }}
            >
              Mobile
            </p>
          </div>
          <div className="input_credential_wrapper">
            {activeTab === "email" ? (
              <div className="inputs_wrapper">
                <label>Email</label>
                <InputBox
                  value={loginData.email}
                  onChange={(e) => {
                    setloginData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                />
              </div>
            ) : (
              <div className="inputs_wrapper">
                <label>Phone Number </label>
                <PhoneNumber
                  id="phone"
                  isEdit={true}
                  fetchedNumber={""}
                  value={loginData.phone_number}
                  onChange={(data) => {
                    setloginData((prev) => ({
                      ...prev,
                      phone_number: data.inputNumber,
                    }));
                  }}
                  onFocus={(e) => ""}
                  tabIndex="3"
                  style={{ height: "88px" }}
                />
              </div>
            )}
            <div className="inputs_wrapper">
              <InputBox
                id="Password"
                header="Password"
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
              />
            </div>
          </div>
          <Button name={"Login"} onClick={() => postLogin()} />
        </div>
      </div>
    </div>
  );
}
