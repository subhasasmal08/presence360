import React from "react";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
    useLocation,
  } from "react-router-dom";
import AuthLogin from "./pages/auth/login/AuthLogin";
import { AnimatePresence } from "framer-motion";

export default function RoutesApp() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AuthLogin/>} strict exact />
      </Routes>
    </AnimatePresence>
  );
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         encryptStorage.getItem("UID") ? (
//           Component ? (
//             <Component {...props} />
//           ) : (
//             rest.render(props)
//           )
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: { from: props.location },
//             }}
//           />
//         )
//       }
//     />
//   );

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);
