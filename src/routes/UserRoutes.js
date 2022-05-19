import { Route } from "react-router-dom";
import Home from "../pages/User/Home";
import Courses from "../pages/User/Courses";
const UserRoutes = () => {
  return (
    <>
      <Route path="home" element={<Home />} />
      <Route path="courses" element={<Courses />} />
    </>
  );
};

export default UserRoutes;
