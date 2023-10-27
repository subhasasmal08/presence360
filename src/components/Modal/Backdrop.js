import { motion } from "framer-motion";
import "./modal2.scss";
const Backdrop = ({ children, onClick, className, style }) => {
  return (
    <motion.div
      className={
        className ? "backdrop_wrapper " + className : "backdrop_wrapper"
      }
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
