import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PostCard from "../../components/common/PostCard";

const Home = () => {
  return (
    <Box>
      <Grid container>
        <Grid item md={12} xs={12} lg={12} textAlign="center" my={4}>
          <Typography fontSize="27px">Posts From SMIT Offical Facebook Page</Typography>
        </Grid>
      </Grid>
      <PostCard />
    </Box>
  );
};

export default Home;
