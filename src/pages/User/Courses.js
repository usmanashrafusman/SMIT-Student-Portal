import { Card, CardActions, CardContent, Button, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxios from "../../axios/httpServices";

import EnrollCouseDialog from "../../components/dialogs/EnrollCouseDialog";
import { getCourses } from "../../axios/courses";
const CourseCard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");

  const [course, setCourse] = useState([]);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const enroll = (id) => {
      handleOpen();
      setId(id);
  };
  const [{ data, loading, error }, executegetCourses] = useAxios(getCourses(), {
    manual: true,
  });
  useEffect(() => {
    executegetCourses()
      .then((res) => {
        setCourse(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <EnrollCouseDialog isOpen={isOpen} handleClose={handleClose} id={id} />
      <Grid container spacing={3} px={2}>
        <Grid item md={12} xs={12} lg={12} sx={{ margin: "10px" }}>
          <Typography>All Courses Available Right Now ...</Typography>
        </Grid>
        {course.map((item) => {
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
                <CardActions>
                  <Button size="small" disabled={!item.isOpen} variant="contained" onClick={() => enroll(item._id)}>
                    Enroll
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
   
      </Grid>
    </>
  );
};

export default CourseCard;
