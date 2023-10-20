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

export default function RoutesApp() {
  const location = useLocation();

  const [Links, setLinks] = useState([
    <Route path="/attendance" element={<Attendance/>} strict exact />,
    <Route path="/roster" element={<Roster/>} strict exact />,
    <Route path="/roster/members/:id" element={<RosterMembers/>} strict exact />,
  ]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AuthLogin />} strict exact />
        {Links.map((item) => item)}
      </Routes>
    </AnimatePresence>
  );
}
