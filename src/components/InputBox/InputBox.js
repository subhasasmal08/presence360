import React, { useEffect, useState } from "react";
import visibilityon from "../../assets/Images/visibility-on.png";
import visibilityoff from "../../assets/Images/visibility-off.png";
import "./inputbox.scss";
const InputBox = React.forwardRef((props, ref) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleIcon = () => {
    setSecureTextEntry(!secureTextEntry); //false
    props.typeValue(secureTextEntry);
  };

  const renderPasswordAccessory = () => {
    let name = secureTextEntry ? visibilityoff : visibilityon;
    return (
      <img
        src={name}
        alt="password-icon"
        className="icon-toggle"
        onClick={() => toggleIcon()}
      />
    );
  };

  useEffect(() => {
    if ((props.error && props.id) || (props.helperText && props.id)) {
      var ele = document.querySelector("#" + props.id);
      ele.classList.add("error_shake");
      setTimeout(function () {
        ele.classList.remove("error_shake");
      }, 300);
    }
  }, [props.error, props.helperText]);
  return (
    <div className="__input__">
      {props.header && <label>{props.header}</label>}
      <div
        style={{
          position: "relative",
          marginLeft: props.marginLeft ? "0" : "0.25vw",
        }}
      >
        {props.icon && props.icon}
        <input
          id={props.id}
          type={props.type ? props.type : "text"}
          className={
            props.error || props.helperText
              ? "input_style input__error"
              : "input_style"
          }
          tabIndex={props.tabIndex}
          onChange={props.onChange}
          autoFocus={props.autoFocus}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          onKeyDown={props.onKeyDown}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onInput={props.onInput}
          disabled={props.disabled}
          style={props.style}
          onKeyUp={props.onKeyUp}
          ref={ref}
        />
      </div>

      {props.helperText && <p className="helperText"> {props.helperText}</p>}
      {props?.children}
      {props.password && renderPasswordAccessory()}
    </div>
  );
});
export default InputBox;
