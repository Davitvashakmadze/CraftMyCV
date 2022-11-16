import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

import "./ImportResume.scss";

const ImportResume = () => {
  const [files, setFiles] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = (e) => {
      setFiles(e.target.result);
    };
    setDisabled(false);
  };

  const navigate = useNavigate();

  const navigateToCreatePath = () => {
    navigate("/create", { state: { files } });
  };

  return (
    <div className="resume-section">
      <h1>Upload Json file</h1>
      <input type="file" onChange={handleChange} />
      <Button
      color="primary"
        className={disabled ? "disabled" : ""}
        onClick={navigateToCreatePath}
        disabled={disabled}
      >
        Import
      </Button>
    </div>
  );
};

export default ImportResume;
