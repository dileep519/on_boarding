import React from "react";
import { Heading } from "../../Shared/Heading/Heading";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Success.css";

export const Success = () => {
  const title = "Congratulations, Eren";
  const description =
    "You have completed onboarding, you can start using The Eden!";
  return (
    <div className="successContainer">
      <CheckCircleIcon sx={{ color: "#654de4", fontSize: "48px" }} />
      <Heading title={title} description={description} />
    </div>
  );
};
