import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import { Route } from "react-router-dom";

const AuthRoutes = (user) => {
  return (
    !user && (
      <>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </>
    )
  );
};

export default AuthRoutes;
