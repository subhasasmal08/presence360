import React, { useEffect, useState } from "react";
import "./login.scss";
import Button from "../../../components/Button/Button";
import InputBox from "../../../components/InputBox/InputBox";
import PhoneNumber from "../../../components/PhoneNumber/PhoneNumber";

export default function AuthLogin() {
  const [activeTab, setActiveTab] = useState("email");
  const [passwordType, setPasswordType] = useState("password");
  const [showErrorMsg, setShowErrorMsg] = useState("");
  const [loginData, setloginData] = useState({});

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
      setShowErrorMsg("fill");
      return;
    } else {
      console.log("api call for post login data");
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
                <label>Email</label>
                <InputBox
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
          {showErrorMsg}
          <Button name={"Login"} onClick={() => postLogin()} />
        </div>
      </div>
    </div>
  );
}
