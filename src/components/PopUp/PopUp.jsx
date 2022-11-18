import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./PopUp.scss";

const PopUp = ({ setPopUpCheck }) => {
  const navigate = useNavigate();

  const popUpRef = useRef();
  const closeRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    console.log("click click click");
    if (e.target === popUpRef.current || e.target === closeRef.current) {
      setPopUpCheck(false);
    } else {
      setPopUpCheck(true);
    }
  };

  const saveResume = () => {
    const resume = {
      date: new Date().toString(),
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      number: localStorage.getItem("number"),
      adress: localStorage.getItem("adress"),
      summary: localStorage.getItem("summary"),
      skills: localStorage.getItem("skills"),
      experience: localStorage.getItem("experience"),
    };
    localStorage.clear();
    localStorage.setItem("resume", JSON.stringify(resume));
    navigate("/");
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="pop-up" ref={popUpRef}>
      <div className="pop-up-inner">
        <span ref={closeRef}>❌</span>

        <h1>Save this resume?</h1>
        <div>
          <button className="yes-btn" onClick={saveResume}>
            YES
          </button>
          <button className="no-btn" onClick={clearLocalStorage}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
