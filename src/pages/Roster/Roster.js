import React, { useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./roster.scss";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";
import AnimatedModal from "../../components/Modal/AnimatedModal";
import { CloseIcon } from "../../helper/icons";
import DatePicker from "react-multi-date-picker";
import pdf from "../../assets/shiftSample.xlsx";
import { useNavigate } from "react-router-dom";

export default function Roaster() {
  const [showFilters, setShowFilters] = useState(false);
  const [showImportModal, setshowImportModal] = useState(false);
  const [filters, setFilters] = useState([
    {
      From_date: "",
    },
    {
      To_date: "",
    },
  ]);
  const navigate = useNavigate();

  const ref = useRef();

  const [rosterData, setRosterData] = useState([
    {
      from: "07-10-23",
      to: "07-10-90",
      actions: "actions",
    },
    {
      from: "07-10-23",
      to: "07-10-90",
      actions: "actions",
    },
    {
      from: "05-10-23",
      to: "06-10-90",
      actions: "actions",
    },
    {
      from: "07-10-23",
      to: "07-10-90",
      actions: "actions",
    },
  ]);

  // const addRows = (index) => {
  //   let _data = [...rosterData];
  //   _data.splice(index + 1, 0, {
  //     new: "subha",
  //     new1: "subha",
  //     new2: "subha",
  //     new3: "subha",
  //     new4: "subha",
  //     new5: "subha",
  //     new6: "subha",
  //   });
  //   setRosterData([..._data]);
  // };
  // const deleteRows = (index) => {
  //   let _data = [...rosterData];
  //   _data.splice(index + 1, 1);
  //   setRosterData([..._data]);
  // };

  return (
    <div className="roster_wrapper">
      <Navbar />
      <div className="roster_subwrapper">
        <div className="roster_table_wrapper">
          <div className="table_upper_wrapper">
            <p>Roster Plan Master Listing</p>
            <div className="table_filters">
              <InputBox type="search" placeholder={"search"} />
              <Button name={"Export"} onClick={() => {}} />
              <Button
                name={"Import"}
                onClick={() => {
                  setshowImportModal(true);
                }}
              />
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
                return (
                  <div className="date_picker">
                    <label>{Object.keys(item)[0].replaceAll("_", " ")}</label>
                    <DatePicker
                      ref={ref}
                      format="DD-MM-YYYY"
                      value={""}
                      highlightToday={false}
                      onChange={(dates) => {
                        let datess = [];
                        let _filters = [...filters];
                        for (let i = 0; i < dates.length; i++) {
                          var date = new Date(dates[i])
                            .toLocaleDateString("en-GB")
                            .replace(/\//g, "-");
                          datess.push(date);
                        }
                        _filters[0]["from"] = [...datess];
                        setFilters([..._filters]);
                        // setRangeDate([...datess]);
                      }}
                      style={{ position: "relative" }}
                      onFocus={""}
                    >
                      <div className="decision_buttons">
                        <Button
                          name={"Cancel"}
                          onClick={() => {
                            // setRangeDate([]);
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
              })}
            </div>
          )}
          {console.log(filters)}
          <table>
            {Object.keys(rosterData[0]).map((item, index) => {
              return <th key={"header" + index}>{item}</th>;
            })}
            {rosterData.map((item, idx) => {
              return (
                <tr key={"table" + idx}>
                  {Object.keys(item).map((data) => {
                    return (
                      <td
                        onClick={() => {
                          item[data] === "actions" &&
                            navigate("/roster/members/" + item.from);
                          // if (item[data] === "view members") {
                          //   item[data] = "hide members";
                          //   addRows(idx);
                          //   setShowActions(!showActions);
                          // } else if (item[data] === "hide members") {
                          //   item[data] = "view members";
                          //   deleteRows(idx);
                          //   setShowActions(!showActions);
                          // }
                        }}
                      >
                        {item[data]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </table>
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
      <AnimatedModal modalOpen={showImportModal}>
        <div className="import_modal">
          <div
            className="close_otp_modal"
            onClick={() => {
              setshowImportModal(false);
            }}
          >
            <p>Import salary component via excel file</p>
            <CloseIcon />
          </div>
          <div className="modal_wrapper">
            <div className="date_picker">
              <label>From Date</label>
              <DatePicker
                ref={ref}
                format="DD-MM-YYYY"
                value={""}
                highlightToday={false}
                onChange={(dates) => {
                  // let datess = [];
                  // for (let i = 0; i < dates.length; i++) {
                  //   var date = new Date(dates[i])
                  //     .toLocaleDateString("en-GB")
                  //     .replace(/\//g, "-");
                  //   datess.push(date);
                  // }
                  // setRangeDate([...datess]);
                }}
                style={{ position: "relative" }}
                onFocus={""}
              >
                <div className="decision_buttons">
                  <Button
                    name={"Cancel"}
                    onClick={() => {
                      // setRangeDate([]);
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
              <label>To Date</label>
              <DatePicker
                ref={ref}
                format="DD-MM-YYYY"
                value={""}
                highlightToday={false}
                onChange={(dates) => {
                  // let datess = [];
                  // for (let i = 0; i < dates.length; i++) {
                  //   var date = new Date(dates[i])
                  //     .toLocaleDateString("en-GB")
                  //     .replace(/\//g, "-");
                  //   datess.push(date);
                  // }
                  // setRangeDate([...datess]);
                }}
                style={{ position: "relative" }}
                onFocus={""}
              >
                <div className="decision_buttons">
                  <Button
                    name={"Cancel"}
                    onClick={() => {
                      // setRangeDate([]);
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
            <div className="modal_subwrapper">
              <div style={{ background: "red" }}>
                <input
                  type={"file"}
                  id="profileInput"
                  style={{ opacity: "0" }}
                  // accept="image/png, image/jpeg"
                  onChange={(e) => {
                    // let file = e.target.files[0];
                    // console.log(file);
                    // if (!file) {
                    //   isProfileChanged = false;
                    // } else {
                    //   isProfileChanged = true;
                    //   setProfilePic(file);
                    // }
                  }}
                />
                file
              </div>
              <a href={pdf} download="shiftSample.xlsx">
                {" "}
                Download Here{" "}
              </a>
            </div>
          </div>
        </div>
      </AnimatedModal>
    </div>
  );
}
