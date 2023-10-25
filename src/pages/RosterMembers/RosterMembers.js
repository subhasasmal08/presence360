import React, { useRef, useState } from "react";
import "./rostermembers.scss";
import Navbar from "../../components/Navbar/Navbar";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import Pagination from "../../components/Pagination/Pagination";
import Dropdown from "../../components/Dropdown/Dropdown";
import DatePicker from "react-multi-date-picker";
import { useNavigate } from "react-router-dom";

export default function RosterMembers() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState([
    {
      Date: "",
      options: [""],
    },
    {
      Employees: "",
      options: ["Mumbai", "Kolkata"],
    },
  ]);
  const [rangeDate, setRangeDate] = useState("");

  const membersData = [
    {
      employee_name: "subha",
      employee_code: "1234",
      mobile: "0101010101",
      department_name: "IT",
      employee_type: "frontend",
      shift: "Morning D",
      date: "07-10-23",
      weekoff: "none",
    },
    {
      employee_name: "subha",
      employee_code: "1234",
      mobile: "0101010101",
      department_name: "IT",
      employee_type: "frontend",
      shift: "Morning D",
      date: "07-10-23",
      weekoff: "none",
    },
    {
      employee_name: "subha",
      employee_code: "1234",
      mobile: "0101010101",
      department_name: "IT",
      employee_type: "frontend",
      shift: "Morning D",
      date: "07-10-23",
      weekoff: "none",
    },
    {
      employee_name: "subha",
      employee_code: "1234",
      mobile: "0101010101",
      department_name: "IT",
      employee_type: "frontend",
      shift: "Morning D",
      date: "07-10-23",
      weekoff: "none",
    },
    {
      employee_name: "subha",
      employee_code: "1234",
      mobile: "0101010101",
      department_name: "IT",
      employee_type: "frontend",
      shift: "Morning D",
      date: "07-10-23",
      weekoff: "none",
    },
  ];

  const navigate = useNavigate();

  const ref = useRef();

  return (
    <div className="roster_members_wrapper">
      <Navbar />
      <div className="roster_members_subwrapper">
        <div className="roster_members_table_wrapper">
          <div className="table_upper_wrapper">
            <div className="navigation_bar">
              <p
                className="header_"
                style={{
                  color: "#7367f0",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/roster")}
              >
                Roster Plan Master
              </p>
              <p className="header_"> /View Member</p>
            </div>
            <div className="table_filters">
              <InputBox type="search" placeholder={"search"} />
              <Button
                name={"Filters"}
                onClick={() => {
                  setShowFilters(!showFilters);
                }}
              />
            </div>
          </div>
          {showFilters && (
            <div className="filters_wrapper">
              {filters.map((item, idx) => {
                if (Object.keys(item)[0] === "Date") {
                  return (
                    <div className="date_picker">
                      <label>{Object.keys(item)[0].replaceAll("_", " ")}</label>
                      <DatePicker
                        ref={ref}
                        format="DD-MM-YYYY"
                        value={rangeDate}
                        highlightToday={false}
                        onChange={(dates) => {
                          let _filters = [...filters];
                          let datess = [];
                          for (let i = 0; i < dates.length; i++) {
                            var date = new Date(dates[i])
                              .toLocaleDateString("en-GB")
                              .replace(/\//g, "-");
                            datess.push(date);
                          }
                          _filters[0]["Date"] = [...datess];
                          setFilters([..._filters]);
                          //   setRangeDate([...datess]);
                        }}
                        style={{ position: "relative" }}
                        onFocus={""}
                      >
                        <div className="decision_buttons">
                          <Button
                            name={"Cancel"}
                            onClick={() => {
                              setRangeDate("");
                              ref.current.closeCalendar();
                            }}
                          />
                          <Button
                            name={"Ok"}
                            onClick={() => {
                              ref.current.closeCalendar();
                            }}
                            // disabled={this.state.RangeDate.length === 0}
                          />
                        </div>
                      </DatePicker>
                    </div>
                  );
                } else {
                  return (
                    <Dropdown
                      id={"filters_" + idx}
                      className={"filters_dd"}
                      label={Object.keys(item)[0].replaceAll("_", " ")}
                      optionsList={item.options}
                      handleOption={(data) => {
                        let _filters = [...filters];
                        _filters[idx][Object.keys(item)[0]] = data;
                        setFilters([..._filters]);
                      }}
                    />
                  );
                }
              })}
            </div>
          )}
          {console.log(filters)}
          <table>
            {Object.keys(membersData[0]).map((item, index) => {
              return (
                <th key={"header" + index}>{item.replaceAll("_", " ")}</th>
              );
            })}
            {membersData.map((item, idx) => {
              return (
                <tr key={"table" + idx}>
                  {Object.keys(item).map((data) => {
                    return <td>{item[data]}</td>;
                  })}
                </tr>
              );
            })}
          </table>
          <div>
            <Pagination
              style={{ justifyContent: "center" }}
              totPages={4}
              currentPage={1}
              rowCount={10}
              pageClicked={(ele, count_) => {
                //   setCurrentPage(ele);
                //   getData({ currentPage: ele });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
