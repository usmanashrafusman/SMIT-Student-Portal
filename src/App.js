import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import User from "./pages/User/User";
import Auth from "./pages/Auth/Auth";
import LMS from "./pages/LMS/LMS";

import AuthRoutes from "./routes/AuthRoutes";
import UserRoutes from "./routes/UserRoutes";

import Notification from "./components/Alert/Notification";

import "./App.css";

import LMSRoutes from "./routes/LMSRoutes";

function App() {
  const { user, notification } = useSelector((state) => state.auth);
  return (
    <>
      {notification.status && <Notification />}
      <Routes>
        <Route path="/auth" element={<Auth />}>
          {AuthRoutes(false)}
        </Route>

        <Route path="/user" element={<User />}>
          {UserRoutes()}
        </Route>

        <Route path="/lms" element={<LMS />}>
          {LMSRoutes(user)}
        </Route>

        <Route exact path="/" element={<Navigate to="/user/home" replace />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
