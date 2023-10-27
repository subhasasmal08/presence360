import React, { useState } from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import AuthLogin from "./pages/auth/login/AuthLogin";
import { AnimatePresence } from "framer-motion";
import Attendance from "./pages/Attendance/Attendance";
import Roster from "./pages/Roster/Roster";
import RosterMembers from "./pages/RosterMembers/RosterMembers";
import { toast, ToastContainer } from "react-toastify";

export default function RoutesApp() {
  const location = useLocation();

  const [Links, setLinks] = useState([
    <Route path="/attendance" element={<Attendance />} strict exact />,
    <Route path="/roster" element={<Roster />} strict exact />,
    <Route
      path="/roster/members/:id"
      element={<RosterMembers />}
      strict
      exact
    />,
  ]);

  return (
    <AnimatePresence>
      <ToastContainer
        hideProgressBar
        autoClose={4000}
        className="Toastify_adjust"
        limit={3}
      />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AuthLogin />} strict exact />
        {Links.map((item) => item)}
      </Routes>
    </AnimatePresence>
  );
}

export const notify = ({
  type = "error",
  msg = "Server Error",
  duration = 3000,
}) =>
  toast(<div>{msg}</div>, {
    type,
  });
