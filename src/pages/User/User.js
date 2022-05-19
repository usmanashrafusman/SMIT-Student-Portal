import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import UserLayout from "../../layout/UserLayout";
const User = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateUser = () => {
    if (pathname === "/user") {
      return navigate("/user/home");
    }
  };
  useEffect(() => {
    navigateUser();
  }, [navigate]);

  return (
    <UserLayout>
      <Outlet />
    </UserLayout>
  );
};

export default User;
