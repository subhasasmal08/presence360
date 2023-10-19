import React, { Component } from "react";
import "./pagination.scss";
export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { pageArray: [], pageNumber: null, RowCount: null };
  }

  handlePagination = () => {
    let { totPages, currentPage, rowCount } = this.props;
    totPages = parseInt(totPages);
    if (totPages.toString().length > 3) {
      let children = document
        .querySelector(".pagination_wrapper")
        .getElementsByTagName("li");
      Array.from(children).forEach((child) => {
        child.style.fontSize = "10px";
      });
    }
    currentPage = parseInt(currentPage);
    this.setState({ pageNumber: currentPage, RowCount: rowCount });
    var pageArr = [];
    if (totPages > 1) {
      if (totPages <= 9) {
        var i = 1;
        while (i <= totPages) {
          pageArr.push(i);
          i++;
        }
      } else {
        if (currentPage <= 4)
          //   pageArr = [1, 2, 3, 4, 5, "", totPages - 1, totPages];
          pageArr = [1, 2, 3, 4, 5, "", totPages - 1, totPages];
        else if (totPages - currentPage <= 3)
          pageArr = [
            1,
            2,
            "",
            // totPages - 7,
            // totPages - 6,
            totPages - 5,
            totPages - 4,
            totPages - 3,
            totPages - 2,
            totPages - 1,
            totPages,
          ];
        else
          pageArr = [
            1,
            2,
            "",
            // currentPage - 3,
            // currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
            // currentPage + 3,
            "",
            // totPages - 1,
            totPages,
          ];
      }
    } else {
      pageArr = [totPages];
    }
    this.setState({ pageArray: [...pageArr] });
  };
  componentDidMount() {
    this.handlePagination();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.totPages !== this.props.totPages ||
      prevProps.currentPage !== this.props.currentPage
    ) {
      this.handlePagination();
    }
  }
  render() {
    const { pageArray, pageNumber, RowCount } = this.state;
    let { totPages, currentPage, rowCount, pageClicked } = this.props;

    return (
      <React.Fragment>
        <ul className="pagination_wrapper" style={this.props.style}>
        <div className="pagination_shadow"></div>
          {pageArray.map((ele, ind) => {
            const toReturn = [];
            if (ind === 0) {
              toReturn.push(
                <li
                  className="num prev"
                  onClick={() => {
                    if (currentPage != 1) {
                      pageClicked(Number(currentPage) - 1, RowCount);
                    }
                  }}
                >
                  {arrowIcon("prev")}
                </li>
              );
            }
            if (ele === "")
              toReturn.push(
                <li className="num dots" key={ind}>
                  <span> ...</span>
                </li>
              );
            else
              toReturn.push(
                <li
                  key={ind}
                  className={Number(currentPage) === ele ? "num active" : "num"}
                  onClick={
                    currentPage === ele
                      ? () => {}
                      : () => {
                          pageClicked(ele, RowCount);
                        }
                  }
                >
                  {ele}
                </li>
              );

            if (ind === pageArray.length - 1) {
              toReturn.push(
                <li
                  className="num next"
                  onClick={() => {
                    if (currentPage != ele) {
                      pageClicked(Number(currentPage) + 1, RowCount);
                    }
                  }}
                >
                  {arrowIcon("next")}
                </li>
              );
              toReturn.push();
            }
            return toReturn;
          })}
        </ul>
      </React.Fragment>
    );
  }
}

const arrowIcon = (id, onClick) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={5.658}
    height={10.115}
    viewBox="0 0 5.658 10.115"
    id={id}
    onClick={onClick}
  >
    <path
      id="Shape_8"
      data-name="Shape 8"
      d="M4.209,8.418,0,4.209,4.209,0"
      transform="translate(0.6 0.849)"
      fill="none"
      stroke="#343434"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      onClick={onClick}
    />
  </svg>
);

//usage
//   <Pagination
//     totPages={300}
//     currentPage={280}
//     rowCount={10}
//     pageClicked={(ele, count_) => {
//       console.log(ele);
//     }}
//   />;
