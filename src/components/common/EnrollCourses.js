import { Card, CardContent, Typography, Grid } from "@mui/material";
const EnrollCourses = ({ user }) => {
  if (user?.enrolledCourses) {
    return user?.enrolledCourses.map((item) => {
      return (
        <Grid item md={4} key={item._id} xs={12}>
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Saylani Mass IT Training
              </Typography>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {`${item.duration} Months`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
  } else {
    return <></>;
  }
};

export default EnrollCourses;
