import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../Ui/Home.scss";
import "../Images/sogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import mainLogo from "../Images/sogo.png";

let parsedJSON;
if (localStorage.getItem("resume")) {
  parsedJSON = JSON.parse(localStorage.getItem("resume"));
}
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-section">
      <div className="container">
        <div className="main-logo">
          <img src={mainLogo} alt="" />
        </div>
        <div className="home-wrapper">
          <Link to="/ChooseTemplate">
            <Button color="success">Create a new resume</Button>
          </Link>
          <p>or</p>
          <Link to="/ImportResume">
            <Button color="warning">Edit existing resume</Button>
          </Link>
        </div>
        <div className="home-container-table">
          {localStorage.getItem("resume") ? (
            <>
              <Table hover>
                <thead>
                  <tr>
                    <th>სახელი - გვარი</th>
                    <th>თარიღი</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="home-resume">
                    <td>{parsedJSON.name}</td>
                    <td>{parsedJSON.date.split(" ").slice(0, 5).join(" ")}</td>
                  </tr>
                </tbody>
              </Table>
              <button
                className="see-more-btn"
                onClick={() =>
                  navigate("/stored_resumes", {
                    state: localStorage.getItem("resume"),
                  })
                }
              >
                See more
              </button>
            </>
          ) : (
            <h2 style={{ textAlign: "center" }}>Latest Resume Not Found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
