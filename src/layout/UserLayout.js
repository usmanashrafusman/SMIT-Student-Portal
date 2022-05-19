import { AppBar, Box, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GrLogin, GrCertificate, GrUserNew } from "react-icons/gr";
import config from "../config";
import "./index.css";
const image =
  "https://scontent.fkhi28-1.fna.fbcdn.net/v/t1.6435-9/71116208_2154903351278332_4425042497978236928_n.jpg?_nc_cat=108&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=tqUXfdKBo8sAX9E1STY&_nc_ht=scontent.fkhi28-1.fna&oh=00_AT-zLkEg8LxW-L0EWsMcxtSVX6xfDX4oBZNvoGKXSCsc3w&oe=62A4B616";
export default function MainLayout({ children }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: config.colors.primary }}>
        <Toolbar>
          <Avatar src={image} sx={{ marginRight: "20px" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Saylani Mass Training Student Portal
          </Typography>
          <Button
            variant="contained"
            sx={{ margin: "15px" }}
            onClick={() => navigate("/auth/signin")}
            endIcon={<GrLogin stroke="#fff"/>}
            className="button"
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "15px" }}
            onClick={() => navigate("/auth/signup")}
            startIcon={<GrUserNew stroke="#fff"/>}
            className="button"
          >
            Sign Up
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "15px" }}
            onClick={() => navigate("/user/courses")}
            endIcon={<GrCertificate color="#fff" />}
            className="couseButton"
          >
            Current Courses
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}
