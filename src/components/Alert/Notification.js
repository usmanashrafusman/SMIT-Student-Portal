import { useEffect } from "react";
import { Alert, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from "../../store.js/auth";
const Notification = () => {
  const dispath = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispath(setNotification({ status: false, message: "" }));
    }, 3000);
  }, []);
  const { notification } = useSelector((state) => state.auth);
  return (
    <Alert
      sx={{
        borderRadius: 0,
        position: "fixed",
        right: "10px",
        top: 10,
        width: "20%",
        zIndex: 1301,
      }}
      severity={notification.type}
    >
      <Typography sx={{ fontSize: "13px", fontWeight: "800" }}>Error</Typography>
      <Typography sx={{ fontSize: "17px" }}>{notification.message}</Typography>
    </Alert>
  );
};

export default Notification;
