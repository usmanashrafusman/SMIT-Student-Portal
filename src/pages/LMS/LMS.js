import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LMSLayout from "../../layout/LMSLayout";

const LMS = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navigateUser = () => {
    if (pathname === "/lms") {
      return navigate("/lms/home");
    }
  };
  useEffect(() => {
    navigateUser();
  }, [navigate]);

  return (
    <LMSLayout>
      <Outlet />
    </LMSLayout>
  );
};

export default LMS;
