import { Card, CardContent, Typography, Grid } from "@mui/material";
import EnrollCourses from "../../components/common/EnrollCourses";
import MyLeaves from "../../components/common/MyLeaves";
import useAuth from "../../hook/useAuth";
const Home = () => {

  const user = useAuth(); // Hook to check if user is logged in
  return (
    <Grid container spacing={3} px={2} mt={4}>
      <Grid item md={12} xs={12} lg={12} sx={{ margin: "10px" }}>
        <Typography sx={{ mb: 1.5, fontSize: "20px" }} color="text.secondary">
          Your Courses
        </Typography>
      </Grid>
      <EnrollCourses user={user} />
      <MyLeaves/>
    </Grid>
  );
};

export default Home;
