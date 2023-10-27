import React, { useEffect, useState } from "react";
import "./login.scss";
import Button from "../../../components/Button/Button";
import InputBox from "../../../components/InputBox/InputBox";
import PhoneNumber from "../../../components/PhoneNumber/PhoneNumber";
import loginLogo from "../../../assets/Images/logo.jpg";
import Background from "../../../assets/Images/background.jpg";
import vector from "../../../assets/Images/vector.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { encryptStorage } from "../../../helper/storage";

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
        password: "Welcome@123",
      });
    } else {
      setloginData({
        email: "maneesha@m3force.com",
        password: "Welcome@123",
      });
    }
  }, [activeTab]);

  const validateLogin = () => {
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
      postData();
    }
  };

  const postData = () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://192.168.1.132:8000/api/v1/attendance/login",
      headers: {
        Authorization: "Basic bWFuZWVzaGFAbTNmb3JjZS5jb20KOldlbGNvbWVAMTIz",
      },
    };

    axios
      .request(config)
      .then((res) => {
        console.log(res);
        let _data = { ...res.data };
        localStorage.removeItem("timer");
        encryptStorage.setItem("UID", _data);
        navigate("/attendance");
      })
      .catch((err) => {
        console.log(err);
        // setLoadingScreen(false);
        // if (err.response.status) {
        //   setErrorResponse(err.response.data.detail);
        //   if (err.response.data.detail.includes("minute")) {
        //     localStorage.setItem(
        //       "timer",
        //       err.response.data.detail.match(/(\d+)/)[0] * 60
        //     );
        //   }
        //   notify({
        //     msg: err.response.data.detail,
        //   });
        // } else {
        //   notify({
        //     msg: "Invalid Credential!",
        //   });
        // }
      });
  };

  const handlePassword = (type) => {
    if (!type) {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };

  let ldata = encryptStorage.getItem("UID");
  console.log(ldata);
  return (
    <div className="login_wrapper">
      <img className="bg" src={Background}></img>
      <div className="login_content">
        <div className="login_lhs">
          <img className="vector_img" src={vector}></img>
        </div>
        <div className="login_rhs">
          <div className="logo">
            <img className="logo_img" src={loginLogo}></img>
          </div>
          <div className="content_subwrapper">
            <h2 className="header_">Welcome Again!</h2>
            {/* <div className="login_type_tab">
              <p
                className={
                  activeTab === "email" ? "activetab" : "inactivetab email"
                }
                onClick={() => {
                  console.log("email");
                  setActiveTab("email");
                  setShowErrorMsg("");
                }}
              >
                Email
              </p>
              <p
                className={
                  activeTab === "mobile" ? "activetab" : "inactivetab mobile"
                }
                onClick={() => {
                  console.log("mobile");
                  setActiveTab("mobile");
                  setShowErrorMsg("");
                }}
              >
                Mobile
              </p>
            </div> */}
            <div className="input_credential_wrapper">
              {activeTab === "email" ? (
                <div className="inputs_wrapper">
                  <InputBox
                    placeholder={"abc@example.com"}
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
          <Button name={"Login"} onClick={() => validateLogin()} />
        </div>
      </div>
    </div>
  );
}
