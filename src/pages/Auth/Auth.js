import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateUser = () => {
    if (pathname === "/auth") {
      return navigate("/auth/signin");
    }
  };
  useEffect(() => {
    navigateUser();
  }, [navigate]);

  return <Outlet />;
};

export default Auth;
