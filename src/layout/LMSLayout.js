import { useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineSick } from "react-icons/md";
import config from "../config";
import "./index.css";
import ApplyForLeave from "../components/dialogs/ApplyForLeave";
const image =
  "https://scontent.fkhi28-1.fna.fbcdn.net/v/t1.6435-9/71116208_2154903351278332_4425042497978236928_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=tqUXfdKBo8sAX9E1STY&_nc_ht=scontent.fkhi28-1.fna&oh=00_AT-zLkEg8LxW-L0EWsMcxtSVX6xfDX4oBZNvoGKXSCsc3w&oe=62A4B616";
export default function LMSLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/auth/signin");
  };
  return (
    <>
      <ApplyForLeave isOpen={isOpen} handleClose={handleClose} />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ background: config.colors.primary }}>
          <Toolbar>
            <Avatar src={image} sx={{ marginRight: "20px" }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Saylani Mass Training Student Portal
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "15px" }}
              onClick={handleOpen}
              endIcon={<MdOutlineSick color="#fff" />}
              className="couseButton"
            >
              Apply For Leave
            </Button>
            <Button
              variant="contained"
              sx={{ margin: "15px" }}
              onClick={logOut}
              color="error"
              endIcon={<BiLogOut stroke="#fff" />}
            >
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
        {children}
      </Box>
    </>
  );
}
