import { useState } from "react";
import { Grid, DialogTitle, DialogContent, DialogActions, Dialog, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppInput from "../forms/Input";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SelectBox from "../forms/SelectBox";
import DatePicker from "../forms/DatePicker";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";
import { useDispatch } from "react-redux";
import { setNotification } from "../../store.js/auth";
import { applyCourse } from "../../axios/courses";
import useAxios from "../../axios/httpServices";

const cityOptions = [
  {
    value: "karachi",
    label: "Karachi",
  },
  {
    value: "hyderabad",
    label: "Hyderabad",
  },
];

const qualification = [
  { value: "metric", label: "Metriculation" },
  { value: "inter", label: "Intermediate" },
  { value: "bs", label: "BS" },
  { value: "master", label: "Master" },
];

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const Input = styled("input")({
  display: "none",
});

const EnrollCouseDialog = ({ isOpen, handleClose, id }) => {
  const dispatch = useDispatch();
  const [datas, setdatas] = useState({
    name: "",
    city: "",
    fatherName: "",
    email: "",
    phone: "",
    cnic: "",
    fatherCnic: "",
    dob: "",
    gender: "",
    address: "",
    lastQualification: "",
    image: null,
  });
  const token = localStorage.getItem("token");
  const [{ data, loading, error }, executeApplyCourse] = useAxios(applyCourse(id, token), {
    manual: true,
  });
  const handleSubmit = () => {
    const timeStamp = Date.now();
    const storageRef = ref(storage, `${timeStamp}`);
    uploadBytes(storageRef, image).then(() => {
      getDownloadURL(ref(storage, `${timeStamp}`))
        .then((url) => {
          setdatas((pre) => ({ ...pre, image: url }));
          executeApplyCourse({ data: { ...datas, image: url } })
            .then((res) => {
              console.log(res.form);
              console.log(res.error)
              dispatch(
                setNotification({
                  status: true,
                  type: "success",
                  message: "You have successfully applied in this course",
                })
              );
              handleClose();
              setdatas({
                name: "",
                city: "",
                fatherName: "",
                email: "",
                phone: "",
                cnic: "",
                fatherCnic: "",
                dob: "",
                gender: "",
                address: "",
                lastQualification: "",
                image: null,
              });
            })
            .catch((err) => {
              console.log(err);
              const error = err?.response?.data?.error;
              console.log(datas);
              dispatch(setNotification({ status: true, type: "error", message: error ? error : "An Error Occur" }));
            });
        })
        .catch((error) => {
          dispatch(setNotification({ status: true, type: "error", message: "An Error Occur" }));
        });
    });
  };
  const submitValidation = (data) => {
    const cnic = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;
    const email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (data.city === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Please Select City" }));
    } else if (data.name === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Enter Valid Name" }));
    } else if (data.fatherName === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Enter Valid Father Name" }));
    } else if (!email.test(data.email)) {
      dispatch(setNotification({ status: true, type: "error", message: "Enter Valid Email" }));
    } else if (data.phone.length < 10) {
      dispatch(setNotification({ status: true, type: "error", message: "Enter Valid Phone Number" }));
    } else if (!cnic.test(data.cnic)) {
      dispatch(setNotification({ status: true, type: "error", message: "Enter Valid CNIC Number" }));
    } else if (!cnic.test(data.fatherCnic)) {
      dispatch(setNotification({ status: true, type: "error", message: "Enter Valid Father CNIC Number" }));
    } else if (data.dob === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Please Select Date of Birth" }));
    } else if (data.gender === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Please Select Gender" }));
    } else if (data.address === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Please Enter Address" }));
    } else if (data.lastQualification === "") {
      dispatch(setNotification({ status: true, type: "error", message: "Please Select Last Qualification" }));
    } else if (image === null) {
      dispatch(setNotification({ status: true, type: "error", message: "Please upload Image" }));
    } else {
      handleSubmit();
    }
  };

  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    setdatas((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    console.log(datas);
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
          <DialogTitle id="alert-dialog-title">Course Enroll Form</DialogTitle>
          <DialogContent>
            <Grid container spacing={4}>
              <Grid item md={4}>
                <SelectBox
                  labelTag="City"
                  placeholder="Select City"
                  name="city"
                  options={cityOptions}
                  required
                  value={datas.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4}>
                <AppInput
                  labelTag="Your Name"
                  placeholder="Your Name"
                  name="name"
                  required
                  onChange={handleChange}
                  value={datas.name}
                />
              </Grid>
              <Grid item md={4}>
                <AppInput
                  labelTag="Father Name"
                  placeholder="Father Name"
                  name="fatherName"
                  required
                  onChange={handleChange}
                  value={datas.fatherName}
                />
              </Grid>
              <Grid item md={4}>
                <AppInput
                  labelTag="Email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  value={datas.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4}>
                <AppInput
                  labelTag="Phone"
                  type="number"
                  name="phone"
                  value={datas.phone}
                  required
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4}>
                <AppInput labelTag="CNIC" type="text" name="cnic" value={datas.cnic} required onChange={handleChange} />
              </Grid>
              <Grid item md={4}>
                <AppInput
                  labelTag="Father CNIC"
                  type="text"
                  value={datas.fatherCnic}
                  name="fatherCnic"
                  required
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={4}>
                <DatePicker required onChange={handleChange} name="dob" value={datas.dob} />
              </Grid>
              <Grid item md={4}>
                <SelectBox
                  labelTag="Gender"
                  placeholder="Select Gender"
                  name="gender"
                  options={gender}
                  required
                  onChange={handleChange}
                  value={datas.gender}
                />
              </Grid>
              <Grid item md={12}>
                <AppInput labelTag="Address" name="address" value={datas.address} required onChange={handleChange} />
              </Grid>
              <Grid item md={12}>
                <SelectBox
                  labelTag="Last Qualification"
                  placeholder="Last Qualification"
                  name="lastQualification"
                  options={qualification}
                  value={datas.lastQualification}
                  required
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
            <Button variant="contained" onClick={() => submitValidation(datas)} autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default EnrollCouseDialog;
