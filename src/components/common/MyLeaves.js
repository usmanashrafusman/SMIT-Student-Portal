import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import useAxios from "../../axios/httpServices";
import { getMyLeaves } from "../../axios/leave";
const MyLeaves = () => {
  const [leaves, setLeaves] = useState([]);
  const token = localStorage.getItem("token");
  const [{ data, loading, error }, executeGetLeaves] = useAxios(getMyLeaves(token), {
    manual: true,
  });
  useEffect(() => {
    executeGetLeaves()
      .then((res) => {
        setLeaves(res.data.leaves);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [leaves]);
  return (
    <Grid container spacing={3} px={2} mt={4}>
      <Grid item md={12} xs={12} lg={12} sx={{ margin: "10px" }}>
        <Typography>Your Leaves Applications</Typography>
      </Grid>
      {leaves.map((leave) => {
        return (
          <Grid item key={leave._id} md={4} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {`Status : ${leave.status}`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {`Subject : ${leave.subject}`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {`Description : ${leave.description}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MyLeaves;
