import React, { useState } from "react";
import HC_Header from "../HC_Header/HC_Header";
import HC_Val_HostCampFrom from "./HC_Val_HostCampFrom";
import { Typography, Paper } from "@mui/material";

const HC_HostCampFrom = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <HC_Header />

      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Paper elevation={3} className="p-6 md:p-10 rounded-lg">
            {submitted ? (
              <div className="text-center">
                <Typography
                  variant="h5"
                  className="text-green-600 font-semibold mb-4"
                >
                  Thank you for your interest!
                </Typography>
                <Typography>
                  Our team will contact you shortly to confirm the details and
                  coordinate the setup.
                </Typography>
              </div>
            ) : (
              <HC_Val_HostCampFrom onSuccess={() => setSubmitted(true)} />
            )}
          </Paper>
        </div>
      </div>
    </>
  );
};

export default HC_HostCampFrom;
