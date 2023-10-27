import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Backdrop";
import { useState } from "react";
import {
  cancelIcon,
  checkedIcon,
  modalErrorIcon,
  modalSuccessIcon,
  warningIcon,
} from "../../helper/icons";
import Button from "../Button/Button";
let _timeout = null;
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const ModalBody = ({
  children,
  handleClose,
  type,
  errorHeader,
  errorText,
  onConfirm,
  className,
  alwayOpen,
  modalOpen,
  timeout = 3000,
}) => {
  useState(() => {
    if (!alwayOpen) {
      if (modalOpen) {
        _timeout = setTimeout(() => {
          handleClose?.();
          clearTimeout(_timeout);
        }, timeout);
      }
    }
    return () => clearTimeout(_timeout);
  }, [modalOpen]);

  return (
    <Backdrop
      onClick={() => {
        clearTimeout(_timeout);
        handleClose?.();
      }}
      className={className}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className={!type ? "animated_modal modalAdjust_" : "animated_modal"}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        {type === "confirm" && (
          <motion.div
            className="modal_content confirm_modal_content"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            }}
            exit={{ opacity: 0 }}
          >
            <div style={{ display: "flex" }}>
              {warningIcon()}

              <div className="warning_content">
                <h3>{errorHeader ? errorHeader : "Warning"}</h3>
                <p>{errorText ? errorText : "Your device will reboot."}</p>
              </div>
            </div>
            <div className="warning_options">
              {checkedIcon(onConfirm)}

              {cancelIcon(handleClose)}
            </div>
          </motion.div>
        )}
        {type === "alert" && (
          <ModalType
            handleClose={handleClose}
            type={type}
            errorHeader={errorHeader}
            errorText={errorText}
          />
        )}
        {type === "success" && (
          <ModalType
            handleClose={handleClose}
            type={type}
            errorHeader={errorHeader}
            errorText={errorText}
          />
        )}
      </motion.div>
    </Backdrop>
  );
};

const AnimatedModal = ({
  children,
  modalOpen,
  handleClose,
  type,
  errorHeader,
  errorText,
  onConfirm,
  className,
  alwayOpen,
  timeout = 3000,
}) => {
  useEffect(() => {
    if (!alwayOpen) {
      if (modalOpen) {
        setTimeout(() => {
          clearTimeout(_timeout);
          handleClose?.();
        }, timeout);
      }
    }
    return () => clearTimeout(_timeout);
  });
  return (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      {modalOpen && (
        <ModalBody
          handleClose={handleClose}
          type={type}
          errorHeader={errorHeader}
          errorText={errorText}
          onConfirm={onConfirm}
          className={className}
          timeout={timeout}
          modalOpen={modalOpen}
          children={children}
          alwayOpen={alwayOpen}
        />
      )}
    </AnimatePresence>
  );
};

export default AnimatedModal;

const ModalType = ({ handleClose, type, errorHeader, errorText }) => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".modalSuccessIcon").classList.add("scaleDown");
    }, 400);
  }, []);

  return (
    <motion.div
      className={
        type === "success"
          ? "modal_content"
          : "modal_content modal_content_error"
      }
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      exit={{ opacity: 0 }}
    >
      {type === "success" ? modalSuccessIcon() : modalErrorIcon()}
      <div className="bg-1"></div>
      <div className="bg_with_content">
        {errorHeader ? errorHeader : type === "success" ? "Success" : "Oh no!"}
      </div>
      <h3 className="modal_text">
        {errorText
          ? errorText
          : type === "success"
          ? "Successful"
          : "Something went wrong!"}
      </h3>
      <Button
        style={{
          display: "block",
          margin: "2vw auto",
        }}
        name={"OK"}
        onClick={handleClose}
      />
    </motion.div>
  );
};
