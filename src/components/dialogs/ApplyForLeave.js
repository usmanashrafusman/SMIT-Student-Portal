import { useState } from "react";
import {
  Grid,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import { useDispatch } from "react-redux";
import { setNotification } from "../../store.js/auth";
import { applyLeave } from "../../axios/leave";
import useAxios from "../../axios/httpServices";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";

const ApplyForLeave = ({ isOpen, handleClose }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [{ data, loading, error }, executeApplyLeave] = useAxios(applyLeave(token), {
    manual: true,
  });
  const [image, setImage] = useState(null);
  const [leave, setLeave] = useState({
    subject: "",
    description: "",
  });
  const handleChange = (e) => {
    setLeave({
      ...leave,
      [e.target.name]: e.target.value,
    });
  };
  const Input = styled("input")({
    display: "none",
  });
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (image) {
      const timeStamp = Date.now();
      const storageRef = ref(storage, `${timeStamp}`);
      uploadBytes(storageRef, image).then(() => {
        getDownloadURL(ref(storage, `${timeStamp}`)).then((url) => {
          const body = { ...leave, attachment: url };
          executeApplyLeave({ data: body })
            .then(() => {
              dispatch(
                setNotification({ status: true, type: "success", message: "Leave Application Submitted Successfully" })
              );
              handleClose();
            })
            .catch((err) => {
              dispatch(
                setNotification({ status: true, type: "error", message: "Error Occur While Applying For Leave" })
              );
            });
        });
      });
    } else {
      executeApplyLeave({ data: { ...leave, attachment: [] } })
        .then(() => {
          dispatch(
            setNotification({ status: true, type: "success", message: "Leave Application Submitted Successfully" })
          );
          handleClose();
        })
        .catch((err) => {
          dispatch(setNotification({ status: true, type: "error", message: "Error Occur While Applying For Leave" }));
        });
    }
  };

  const checkSubmit = (data) => {
    if (data.subject === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Please enter subject" }));
    } else if (data.description === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Please enter description" }));
    } else {
      handleSubmit();
    }
  };

  return (
    <div>
      <form>
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth
        >
          <DialogTitle id="alert-dialog-title">Apply For Leave</DialogTitle>
          <DialogContent>
            <Grid container spacing={4}>
              <Grid item md={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="subject"
                  label="Subject"
                  type="text"
                  id="subject"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="text"
                  id="description"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography>Upload Iamge</Typography>
                  <label htmlFor="contained-button-file">
                    <Input onChange={onImageChange} accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span" endIcon={<PhotoCamera />}>
                      Upload
                    </Button>
                  </label>
                </Stack>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" autoFocus onClick={() => checkSubmit(leave)}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default ApplyForLeave;
