import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, MenuItem, Button, Typography, Box } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import isBefore from "date-fns/isBefore";
import startOfToday from "date-fns/startOfToday";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Only alphabets and spaces allowed")
    .required("Full Name is required"),

  organizationName: Yup.string(),

  designation: Yup.string(),

  mobile: Yup.string()
    .matches(
      /^\+91\d{10}$/,
      "Mobile number must start with +91 and contain 10 digits"
    )
    .required("Mobile Number is required"),

  email: Yup.string().email("Invalid email"),

  address: Yup.string().required("Address is Required"),

  city: Yup.string().matches(
    /^[A-Za-z ]+$/,
    "Only alphabets and spaces allowed"
  ),

  pinCode: Yup.string().matches(/^\d{6}$/, "Pin Code must be exactly 6 digits"),

  preferredDate: Yup.date()
    .nullable()
    .required("Preferred date is required")
    .test("not-past", "Date cannot be in the past", (value) =>
      value ? !isBefore(value, startOfToday()) : true
    ),

  timeSlot: Yup.string().required("Time Slot is required"),

  expectedMembers: Yup.number()
    .required("Expected number is required")
    .min(10, "Minimum 10 members required")
    .test(
      "multiple-of-10",
      "Must be in steps of 10",
      (value) => value % 10 === 0
    ),

  notes: Yup.string(),
});

const HC_Val_HostCampFrom = ({ onSuccess }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      organizationName: "",
      designation: "",
      mobile: "+91",
      email: "",
      address: "",
      city: "",
      pinCode: "",
      preferredDate: null,
      timeSlot: "",
      expectedMembers: 10,
      notes: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      onSuccess();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <Typography variant="h5" className="text-blue-700 font-bold">
        Host a Camp – Booking Form
      </Typography>

      {/* Organizer Information */}
      <div>
        <Typography variant="h6">1. Organizer Information</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={formik.values.fullName}
            onChange={(e) => {
              const value = e.target.value.replace(/[^A-Za-z ]/g, "");
              formik.setFieldValue("fullName", value);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />

          <TextField
            fullWidth
            label="Organization Name"
            name="organizationName"
            {...formik.getFieldProps("organizationName")}
          />
          <TextField
            fullWidth
            label="Designation / Role"
            name="designation"
            {...formik.getFieldProps("designation")}
          />
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <Typography variant="h6">2. Contact Details</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobile"
            value={formik.values.mobile}
            onChange={(e) => {
              let value = e.target.value;
              if (!value.startsWith("+91")) value = "+91";
              value = "+91" + value.slice(3).replace(/\D/g, "").slice(0, 10);
              formik.setFieldValue("mobile", value);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
      </div>

      {/* Camp Location */}
      <div>
        <Typography variant="h6">3. Camp Location</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <TextField
            fullWidth
            label="Full Address"
            name="address"
            {...formik.getFieldProps("address")}
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="City"
            name="city"
            value={formik.values.city}
            onChange={(e) => {
              const value = e.target.value.replace(/[^A-Za-z ]/g, "");
              formik.setFieldValue("city", value);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />

          <TextField
            fullWidth
            label="Pin Code"
            name="pinCode"
            value={formik.values.pinCode}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 6);
              formik.setFieldValue("pinCode", value);
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
            helperText={formik.touched.pinCode && formik.errors.pinCode}
          />
        </div>
      </div>

      {/* Camp Details */}
      <div>
        <Typography variant="h6">4. Camp Details</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Preferred Camp Date"
              value={formik.values.preferredDate}
              onChange={(value) => formik.setFieldValue("preferredDate", value)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={
                    formik.touched.preferredDate &&
                    Boolean(formik.errors.preferredDate)
                  }
                  helperText={
                    formik.touched.preferredDate && formik.errors.preferredDate
                  }
                />
              )}
              disablePast
            />
          </LocalizationProvider>

          <TextField
            fullWidth
            select
            label="Preferred Time Slot"
            name="timeSlot"
            {...formik.getFieldProps("timeSlot")}
            error={formik.touched.timeSlot && Boolean(formik.errors.timeSlot)}
            helperText={formik.touched.timeSlot && formik.errors.timeSlot}
          >
            <MenuItem value="Morning">Morning</MenuItem>
            <MenuItem value="Afternoon">Afternoon</MenuItem>
            <MenuItem value="Evening">Evening</MenuItem>
          </TextField>

          <TextField
            fullWidth
            type="number"
            label="Expected Number of Members"
            name="expectedMembers"
            value={formik.values.expectedMembers}
            onChange={(e) => {
              const value = Math.max(10, Math.floor(e.target.value / 10) * 10);
              formik.setFieldValue("expectedMembers", value);
            }}
            inputProps={{
              min: 10,
              step: 10,
            }}
            onBlur={formik.handleBlur}
            error={
              formik.touched.expectedMembers &&
              Boolean(formik.errors.expectedMembers)
            }
            helperText={
              formik.touched.expectedMembers && formik.errors.expectedMembers
            }
          />

          <TextField
            fullWidth
            label="Additional Notes"
            name="notes"
            {...formik.getFieldProps("notes")}
            multiline
            rows={3}
          />
        </div>
      </div>

      {/* Submit */}
      <Box textAlign="center" mt={4}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="bg-blue-700 hover:bg-blue-800 text-white"
        >
          Host My Camp
        </Button>
      </Box>
    </form>
  );
};

export default HC_Val_HostCampFrom;
