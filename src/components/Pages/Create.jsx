import React from "react";
import { Button } from "reactstrap";
import "../Ui/Create.scss";
// import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div className="create-section">
      <div className="container">
        <div className="create-wrapepr">
          <div className="theme-page">
            <h1>Providence</h1>
            <p>
              This job is but one sure step forward towards destiny, a story you
              write with great care and effort each day. You're here, you're
              ready, with Providence.
            </p>
            <h2>Color</h2>
            <div className="colors"></div>
            <Button className="use-btn" color="primary">
              Use this template
            </Button>
          </div>
          <div className="theme-peper">
            <div className="paper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
