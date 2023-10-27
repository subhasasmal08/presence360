import React, { useEffect, useRef, useState } from "react";
import Navbar, { LoadingText } from "../../components/Navbar/Navbar";
import "./attendance.scss";
import InputBox from "../../components/InputBox/InputBox";
import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import DatePicker from "react-multi-date-picker";
import Pagination from "../../components/Pagination/Pagination";
import Scroller from "../../components/Scroller/Scrollbar";
import axios from "axios";
import { API_URL, SOCKET_URL, axiosApiInstance } from "../../helper/request";

export default function Attendance() {
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rangeDate, setRangeDate] = useState([]);
  const [SearchText, setSearchText] = useState(undefined);
  const [filters, setFilters] = useState([
    {
      Date_range: [],
      options: [""],
    },
    {
      Location: "",
      options: ["Mumbai", "Kolkata"],
    },
    {
      Sub_location: "Thane",
      options: ["Thane", "Mulund"],
    },
    {
      Department: "",
      options: ["IT"],
    },
    {
      Sub_department: "",
      options: [""],
    },
    {
      Designation: "",
      options: [""],
    },
    {
      Shift: "",
      options: [""],
    },
    {
      Area: "",
      options: [""],
    },
    {
      Contractor: "",
      options: [""],
    },
    {
      Workstations: "",
      options: [""],
    },
    {
      Category: "",
      options: [""],
    },
    {
      Employee_type: "",
      options: [""],
    },
    {
      Employees: "",
      options: [""],
    },
    {
      Status: "",
      options: [""],
    },
  ]);
  const [attendanceData, setAttendanceData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadFile, setDownloadFile] = useState("");

  const ref = useRef();
  useEffect(() => {
    getAttendanceData({ currentPage: 1, searchText: "" });
  }, []);

  const getAttendanceData = ({ currentPage = 1, searchText = SearchText }) => {
    let arr = [];
    let url = `attendance/fetchemployeedetail?page=${currentPage}&items=10`;
    if (searchText) url += `&search=${searchText}`;
    setIsLoading(true);
    axiosApiInstance
      .get(API_URL + url)
      .then((res) => {
        res.data.details.map((item, idx) => {
          arr.push({
            id: idx + 1,
            employee_code: item.employee.employee_code,
            employee_name: item.employee.name,
            department: "Security",
            shift: item.shift.name,
            shift_start_time: item.shift.start_time,
            shift_end_time: item.shift.end_time,
            attendance_date: item.attendance_date,
            in: item.in_date + "|" + item.in_time,
            out: item.out_date + "|" + item.out_time,
            working_hours: item.working_time,
            area: "-",
            in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
            out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
          });
        });
        let _totalPages = Math.ceil(res.data.total_count / 10);
        setTotalPages(_totalPages);
        setIsLoading(false);
        setAttendanceData([...arr]);
      })
      .catch((err) => {})
      .finally(() => {});
  };

  const attendanceDataArr = [
    {
      id: "1",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "2",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "3",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "4",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "5",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "6",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "7",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "8",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "9",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "10",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "11",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "12",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "13",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "14",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "15",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "16",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "17",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "18",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
    {
      id: "19",
      employee_code: "0764",
      employee_name: "KGASP GERU",
      department: "Security",
      shift: "Morning C",
      shift_start_time: "07:00:00",
      shift_end_time: "19:00:00",
      attendance_date: "2023-10-02",
      in: "2023-10-02 | 07:14:47",
      out: "2023-10-03 | 06:50:12",
      working_hours: "23:36:00",
      area: "-",
      in_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
      out_address: "WR6X+8C9, Colombo 00300, Sri Lanka",
    },
  ];

  const getDownloadFile = () => {
    axiosApiInstance.get(API_URL + "attendance/exportExcel").then((res) => {
      setDownloadFile(SOCKET_URL + res.data.file_path);
      document.getElementById("my_download").click();
    });
  };

  return (
    <div className="attendance_wrapper">
      <Navbar />
      <div className="attendance_subwrapper">
        <div className="attendance_table_wrapper">
          <div className="table_upper_wrapper">
            <p className="header_">Attendance Listing</p>
            <div className="table_filters">
              <InputBox
                type="search"
                placeholder={"search"}
                value={SearchText}
                onChange={(e) => {
                  let { value } = e.target;
                  if (value) {
                    setSearchText(value);
                    getAttendanceData({ currentPage: 1, searchText: value });
                  } else {
                    setSearchText(undefined);
                    getAttendanceData({ currentPage: 1, searchText: "" });
                  }
                }}
              />
              <Button
                name={"Filters"}
                onClick={() => {
                  setShowFilters(!showFilters);
                }}
                disabled={attendanceData.length === 0}
              />
              <a
                id="my_download"
                href={downloadFile}
                download={downloadFile}
                style={{ display: "none" }}
              ></a>
              <Button
                name={"Export"}
                onClick={() => {
                  getDownloadFile();
                }}
              />
            </div>
          </div>
          {showFilters && (
            <div className="filters_wrapper">
              {filters.map((item, idx) => {
                if (Object.keys(item)[0] === "Date_range") {
                  return (
                    <div className="date_picker">
                      <label>{Object.keys(item)[0].replaceAll("_", " ")}</label>
                      <DatePicker
                        placeholder="Select Range"
                        ref={ref}
                        range
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
                          _filters[0]["Data_range"] = [...datess];
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
                              setRangeDate([]);
                              ref.current.closeCalendar();
                            }}
                          />
                          <Button
                            name={"Ok"}
                            onClick={() => {
                              ref.current.closeCalendar();
                            }}
                            // disabled={this.state.RangeDate.length = == 0}
                          />
                        </div>
                      </DatePicker>
                    </div>
                  );
                } else {
                  return (
                    <Dropdown
                      defaultText={Object.values(item)[0] ?? "Choose option"}
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
          <div className="table_subwrapper">
            {!isLoading ? (
              attendanceData.length === 0 && SearchText !== undefined ? (
                <div className="no_data">NO RECORDS FOUND</div>
              ) : (
                <table>
                  {attendanceData.length > 0 && (
                    <Scroller autoHeightMax="65vh">
                      {Object.keys(attendanceData[0]).map((item, index) => {
                        return (
                          <th key={"header" + index}>
                            {item.replaceAll("_", " ")}
                          </th>
                        );
                      })}
                      {attendanceData.map((item, idx) => {
                        return (
                          <tr key={"table" + idx}>
                            {Object.keys(item).map((data) => {
                              return <td>{item[data]}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </Scroller>
                  )}
                </table>
              )
            ) : (
              <LoadingText />
            )}
          </div>
          {totalPages >= 2 && (
            <Pagination
              style={{ justifyContent: "center" }}
              totPages={totalPages}
              currentPage={currentPage}
              rowCount={10}
              pageClicked={(ele, count_) => {
                setCurrentPage(ele);
                getAttendanceData({ currentPage: ele, searchText: "" });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
