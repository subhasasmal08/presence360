import React from "react";
import "./dropdown.scss";
import Scrollbars from "react-custom-scrollbars";
import { useRef, useCallback, useEffect, useState } from "react";
import useClickOutside from "../../helper/useClickOutside";

function Dropdown({
  style,
  className,
  optionsList,
  handleOption,
  defaultText,
  label,
  error,
  onFocus,
  onMouseDown,
  id,
  isObject,
  isLoading,
}) {
  const primaryRef = useRef();
  const [defaultSelectText, setdefaultSelectText] = useState("");
  const [showOptionList, setshowOptionList] = useState(false);

  const primaryClose = useCallback(() => {
    document.querySelector("." + id)?.classList.remove("active__");
    setTimeout(() => {
      setshowOptionList(false);
    }, 200);
  }, []);
  useClickOutside(primaryRef, primaryClose);
  useEffect(() => {
    if (showOptionList) {
      setTimeout(() => {
        document.querySelector("." + id).classList.add("active__");
      }, 100);
    }
  }, [showOptionList]);
  const handleOptionClick = (e) => {
    setdefaultSelectText(e.target.getAttribute("data-name"));
    primaryClose();
    handleOption(e.target.getAttribute("data-name"));
  };
  const handleOptionClick2 = (name, id) => {
    setdefaultSelectText(name);
    primaryClose();
    handleOption(name, id);
  };

  const handleListDisplay = () => {
    if (onFocus) {
      onFocus(id && id);
    }
    setshowOptionList(!showOptionList);
  };

  useEffect(() => {
    if (error && id) {
      var ele = document.querySelector("#" + label?.replace(/ /g, "_"));
      ele.classList.add("error_shake");
      setTimeout(function () {
        ele.classList.remove("error_shake");
      }, 300);
    }
  }, [error]);

  useEffect(() => {
    setdefaultSelectText(defaultText || "Choose option");
  }, [defaultText]);

  return (
    <div
      className={
        className
          ? "custom-select-container " + className
          : "custom-select-container"
      }
      style={style}
      onMouseDown={onMouseDown}
    >
      {label && <p className="dd-label">{label}</p>}
      {optionsList?.length === 0 ? (
        <button
          id={label?.replace(/ /g, "_")}
          className={error ? "selected-text input__error" : "selected-text"}
          style={{ cursor: "default" }}
        >
          {label ? "No " + { label } + " found" : "No data found"}
        </button>
      ) : (
        <button
          type="button"
          id={label?.replace(/ /g, "_")}
          className={error ? "selected-text input__error" : "selected-text"}
          onClick={isLoading ? null : () => handleListDisplay()}
          title={defaultSelectText}
        >
          {defaultSelectText?.replace(/_/g, " ")}
          {expand(showOptionList)}
        </button>
      )}
      {showOptionList && (
        <div className={"select-options " + id} id={id} ref={primaryRef}>
          <Scrollbars
            autoHeight
            autoHeightMax="14vh"
            renderThumbHorizontal={({ style, ...props }) => {
              const thumbStyle = {
                borderRadius: 6,
                backgroundColor: "rgba(35, 49, 86, 0.8)",
              };
              return <div style={{ ...style, ...thumbStyle }} {...props} />;
            }}
            renderThumbVertical={({ style, ...props }) => {
              const thumbStyle = {
                borderRadius: 6,
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                width: "3px",
              };
              return <div style={{ ...style, ...thumbStyle }} {...props} />;
            }}
          >
            {isObject
              ? optionsList?.map((option) => {
                  return (
                    <button
                      type="button"
                      className={
                        defaultSelectText === option.name
                          ? "custom-select-option active_option"
                          : "custom-select-option"
                      }
                      data-name={option.name}
                      key={option.id}
                      onClick={() => handleOptionClick2(option.name, option.id)}
                    >
                      {option.name}
                    </button>
                  );
                })
              : optionsList?.map((option) => {
                  return (
                    <button
                      type="button"
                      className={
                        defaultSelectText === option
                          ? "custom-select-option active_option"
                          : "custom-select-option"
                      }
                      data-name={option}
                      key={option}
                      onClick={handleOptionClick}
                    >
                      {option?.replace(/_/g, " ")}
                    </button>
                  );
                })}
          </Scrollbars>
        </div>
      )}
    </div>
  );
}

export default Dropdown;

const expand = (showOptionList) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6.881}
    height={4.011}
    viewBox="0 0 6.881 4.011"
    className={showOptionList ? "drop_icon " : "drop_icon list_open"}
  >
    <g id="ic-chevron-down" transform="translate(1.061 0.75)">
      <g id="Layer">
        <g id="Vrstva_127" data-name="Vrstva 127">
          <path
            id="Vector"
            d="M0,2.2,2.055.145a.5.5,0,0,1,.7,0l2,2"
            fill="none"
            stroke="#151515"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth={1.5}
          />
        </g>
      </g>
    </g>
  </svg>
);
