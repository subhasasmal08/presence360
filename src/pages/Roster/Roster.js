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
import Dropdown from "../../components/Dropdown/Dropdown";

export default function Roaster() {
  const fromRef = useRef();
  const toRef = useRef();
  const ref = useRef();
  const navigate = useNavigate();

  const [showFilters, setShowFilters] = useState(false);
  const [showImportModal, setshowImportModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [fileName, setfileName] = useState({});
  const [filters, setFilters] = useState([
    {
      From_date: "",
      ref: fromRef,
    },
    {
      To_date: "",
      ref: toRef,
    },
  ]);

  const [fileDate, setFileDate] = useState([
    {
      From: "",
      ref: fromRef,
    },
    {
      To: "",
      ref: toRef,
    },
  ]);

  const [rosterData, setRosterData] = useState([
    {
      from: "07-10-23",
      to: "07-10-90",
      actions: "View members",
    },
    {
      from: "07-10-23",
      to: "07-10-90",
      actions: "View members",
    },
    {
      from: "05-10-23",
      to: "06-10-90",
      actions: "View members",
    },
    {
      from: "07-10-23",
      to: "07-10-90",
      actions: "View members",
    },
  ]);

  const downloadFile = (type) => {};

  return (
    <div className="roster_wrapper">
      <Navbar />
      <div className="roster_subwrapper">
        <div className="roster_table_wrapper">
          <div className="table_upper_wrapper">
            <p className="header_">Roster Plan Master Listing</p>
            <div className="table_filters">
              <InputBox type="search" placeholder={"search"} />
              <Dropdown
                defaultText={"Export"}
                optionsList={["Print", "Csv", "Excel", "Pdf", "Copy"]}
                handleOption={(data) => downloadFile()}
              />
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
                    {console.log(Object.values(item)[0])}
                    <DatePicker
                      placeholder={
                        "Select " +
                        Object.keys(item)[0].replaceAll("_", " ").toLowerCase()
                      }
                      ref={item.ref}
                      format="DD-MM-YYYY"
                      value={Object.values(item)[0]}
                      highlightToday={false}
                      onChange={(dates) => {
                        let datess = "";
                        let _filters = [...filters];
                        for (let i = 0; i < dates.length; i++) {
                          var date = new Date(dates[i])
                            .toLocaleDateString("en-GB")
                            .replace(/\//g, "-");
                          datess.push(date);
                        }
                        console.log(datess);
                        _filters[idx][Object.keys(item)[0]] = datess;
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
                            console.log(Object.keys(item)[0]);
                            let _filters = [...filters];
                            _filters[idx][Object.keys(item)[0]] = "";
                            console.log(_filters[idx].To_date);
                            setFilters([..._filters]);
                            // setRangeDate([]);
                            item.ref.current.closeCalendar();
                          }}
                        />
                        <Button
                          name={"Ok"}
                          onClick={() => {
                            item.ref.current.closeCalendar();
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
                        style={{
                          textDecoration:
                            item[data] === "View members" && "underline",
                          color: item[data] === "View members" && "#7367f0",
                          cursor: item[data] === "View members" && "pointer",
                        }}
                        onClick={() => {
                          item[data] === "View members" &&
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
            totPages={totalPages}
            currentPage={currentPage}
            rowCount={10}
            pageClicked={(ele, count_) => {
              setCurrentPage(ele);
              // getAttendanceData({ currentPage: ele, searchText: "" });
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
              setfileName({});
            }}
          >
            <p className="header_">Import salary component via excel file</p>
            <CloseIcon />
          </div>
          <div className="modal_wrapper">
            <div className="date_picker_wrapper">
              {fileDate.map((item, idx) => {
                return (
                  <div className="date_picker">
                    <label>{Object.keys(item)[0].replaceAll("_", " ")}</label>
                    <DatePicker
                      placeholder={
                        "Select " +
                        Object.keys(item)[0].replaceAll("_", " ").toLowerCase()
                      }
                      ref={item.ref}
                      format="DD-MM-YYYY"
                      value={Object.values(item)[0]}
                      highlightToday={false}
                      onChange={(dates) => {
                        let datess = "";
                        let _fileDate = [...fileDate];
                        for (let i = 0; i < dates.length; i++) {
                          var date = new Date(dates[i])
                            .toLocaleDateString("en-GB")
                            .replace(/\//g, "-");
                          datess.push(date);
                        }
                        _fileDate[idx][Object.keys(item)[0]] = datess;
                        console.log(_fileDate[idx]["To_date"]);
                        setFileDate([..._fileDate]);
                        // setRangeDate([...datess]);
                      }}
                      style={{ position: "relative" }}
                      onFocus={""}
                    >
                      <div className="decision_buttons">
                        <Button
                          name={"Cancel"}
                          onClick={() => {
                            console.log(Object.keys(item)[0]);
                            let _fileDate = [...fileDate];
                            _fileDate[idx][Object.keys(item)[0]] = "";
                            console.log(_fileDate[idx].To_date);
                            setFileDate([..._fileDate]);
                            // setRangeDate([]);
                            item.ref.current.closeCalendar();
                          }}
                        />
                        <Button
                          name={"Ok"}
                          onClick={() => {
                            item.ref.current.closeCalendar();
                          }}
                          // disabled={this.state.RangeDate.length === 0}
                        />
                      </div>
                    </DatePicker>
                  </div>
                );
              })}
            </div>
            <div className="modal_subwrapper">
              <div className="upload_file_wrapper">
                <p className="select_tag">
                  {fileName.name
                    ? "Select another file to upload"
                    : "Select a file to upload"}
                </p>
                <p className="filename_">{fileName.name}</p>
                {fileName.name !== undefined ? (
                  <div className="descision_buttons">
                    <Button
                      name={"Upload"}
                      onClick={() => {
                        setshowImportModal(false);
                      }}
                    />
                    <Button
                      name={"Cancel"}
                      onClick={() => {
                        setfileName({});
                      }}
                    />
                  </div>
                ) : (
                  <button className="upload_file_button">
                    <label>{fileName.name ?? "Select File"}</label>
                    <input
                      type={"file"}
                      id="profileInput"
                      className="input_file"
                      // accept="image/png, image/jpeg"
                      onChange={(e) => {
                        let file = e.target.files[0];
                        console.log(file);
                        setfileName(file);
                      }}
                    />
                  </button>
                )}
                {fileName.name && (
                  <div className="other_file_wrapper">
                    <p className="other_tag">Select other file</p>
                    <input
                      type={"file"}
                      id="profileInput"
                      className="other_file"
                      // accept="image/png, image/jpeg"
                      onChange={(e) => {
                        let file = e.target.files[0];
                        console.log(file);
                        setfileName(file);
                      }}
                    />
                  </div>
                )}
              </div>

              <a
                className="download_file_tag"
                href={pdf}
                download="shiftSample.xlsx"
              >
                {" "}
                Download sample file here{" "}
              </a>
            </div>
          </div>
        </div>
      </AnimatedModal>
    </div>
  );
}
