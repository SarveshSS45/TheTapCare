import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BookNowForm = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    date: "",
    slot: "",
    service: "lab",
    consent: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info", // "error" or "success"
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "mobile" && !/^\d*$/.test(value)) return; // Allow only numbers
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.date || !form.slot || !form.consent) {
      setSnackbar({
        open: true,
        message: "Please fill all required fields and provide consent.",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log("Form submitted:", form);

      // Reset form
      setForm({
        name: "",
        mobile: "",
        date: "",
        slot: "",
        service: "lab",
        consent: false,
      });

      setLoading(false);
      setSnackbar({
        open: true,
        message: "Appointment booked successfully!",
        severity: "success",
      });

      onClose(); // Close dialog
    }, 1000);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>
          Book Your Appointment
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <form className="flex flex-col gap-4 mt-2" onSubmit={handleSubmit}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              required
              value={form.name}
              onChange={handleChange}
            />
            <TextField
              name="mobile"
              label={`Mobile Number (${form.mobile.length}/10)`}
              type="tel"
              fullWidth
              required
              inputProps={{ maxLength: 10 }}
              value={form.mobile}
              onChange={handleChange}
            />
            <TextField
              name="date"
              label="Date"
              type="date"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              value={form.date}
              onChange={handleChange}
            />
            <FormControl required>
              <FormLabel>Appointment Slot</FormLabel>
              <RadioGroup
                name="slot"
                value={form.slot}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="Morning" control={<Radio />} label="Morning" />
                <FormControlLabel value="Afternoon" control={<Radio />} label="Afternoon" />
                <FormControlLabel value="Evening" control={<Radio />} label="Evening" />
              </RadioGroup>
            </FormControl>
            <FormControl required>
              <FormLabel>Service</FormLabel>
              <RadioGroup
                name="service"
                value={form.service}
                onChange={handleChange}
                row
              >
                <FormControlLabel value="lab" control={<Radio />} label="Lab Test Booking" />
                <FormControlLabel value="doctor" control={<Radio />} label="Consult Doctor" />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                />
              }
              label="I authorize TheTapCare to contact me, overriding DND."
            />
          </form>
        </DialogContent>

        <DialogActions>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Confirm Appointment"}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        onClose={handleSnackbarClose}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default BookNowForm;
