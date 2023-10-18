import React from "react";
import { motion } from "framer-motion";
import "./button.scss";
// import btnBG from "../../assets/images/btnBG.png";
export default function Button({
  disabled,
  name,
  type,
  onClick,
  style,
  bg,
  id,
  btnImg
}) {
  return (
    <motion.button
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      disabled={disabled}
      className={    type === "gradient" ? "btn btn_gradient" : "btn"}
      onClick={onClick}
      style={style}
      id={id}
    >
      {/* {bg && <img src={btnBG} className="btnBG" />} */}
      {name}
      {btnImg}

    </motion.button>
  );
}
