import { Route } from "react-router-dom";
import Home from "../pages/LMS/Home";

const LMSRoutes = (user) => {
  return user && <Route path="home" element={<Home />} />;
};

export default LMSRoutes;
