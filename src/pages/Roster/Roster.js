import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./roster.scss";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/Button/Button";
import InputBox from "../../components/InputBox/InputBox";

export default function Roaster() {
  const [showFilters, setShowFilters] = useState(false);

  const rosterData = [
    {
      from: "07-10-23",
      to: "07-10-90",
    },
    {
      from: "07-10-23",
      to: "07-10-90",
    },
  ];

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
              <Button name={"Import"} onClick={() => {}} />
              <Button
                name={"Filters"}
                onClick={() => {
                  setShowFilters(!showFilters);
                }}
              />
            </div>
          </div>
          {showFilters && <div className="filters_wrapper">filters</div>}
          <table>
            {Object.keys(rosterData[0]).map((item, index) => {
              return (
                <th key={"header" + index}>{item}</th>
              );
            })}
            {rosterData.map((item, idx) => {
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
