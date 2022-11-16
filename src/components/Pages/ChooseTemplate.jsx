import { useRef, useState } from "react";
import { colorCards } from "./utils/ColorCards";
import { Link } from "react-router-dom";
import { angoraTheme, blueprintTheme } from "../Data/Themes";
import { Button } from "reactstrap";

import ThemeColors from "../ThemeColors";
import useFetch from "../hooks/useFetch";

import "../Ui/ChooseTemplate.scss";

import AngoraTheme from "../AngoraTheme/AngoraTheme";
import BlueprintTheme from "../BlueprintTheme/BlueprintTheme";

const ChooseTemplate = () => {
  const themeNameRef = useRef();
  const themeAboutRef = useRef();

  const [colors, setColors] = useState(colorCards);
  const [storageTHeme, setStorageTheme] = useState("Angora");
  const [storageColor, setStorageColor] = useState("");
  const [themeToggle, setThemeToggle] = useState(true);
  const [themeColor, setThemeColor] = useState("");

  const { data, loading } = useFetch();

  const changeTheme = () => {
    if (themeNameRef.current.innerHTML === "Angora") {
      themeNameRef.current.innerHTML = blueprintTheme.theme;
      themeAboutRef.current.innerHTML = blueprintTheme.about;
      setStorageTheme(blueprintTheme.theme);
    } else {
      themeNameRef.current.innerHTML = angoraTheme.theme;
      themeAboutRef.current.innerHTML = angoraTheme.about;
      setStorageTheme(angoraTheme.theme);
    }
    setThemeToggle((prev) => !prev);
  };

  const selectColor = (e, id) => {
    colors.forEach((e) => {
      e.isSelected = false;
    });

    const selectEachCard = colors.map((eachColor) => {
      if (id === eachColor.id) {
        return {
          ...eachColor,
          isSelected: !eachColor.isSelected,
        };
      }
      return eachColor;
    });

    setColors(selectEachCard);
    setStorageColor(e.target.style.backgroundColor);
  };

  const stillSelectedColor = () => {
    setThemeColor(storageColor);
  };

  const themeColorChangeByHover = (bgColor) => {
    setThemeColor(bgColor);
  };

  const storageThemeInLocalStorage = () => {
    localStorage.setItem("theme", storageTHeme);
    localStorage.setItem("color", storageColor);
  };

  return (
    <div className="chooseTemplate-container">
      <div className="chooseTemplate-container-themes">
        <div className="chooseTemplate-container-themes-header">
          <h1 ref={themeNameRef}>{angoraTheme.theme}</h1>
          <p ref={themeAboutRef}>{angoraTheme.about}</p>
        </div>
        <div
          onMouseLeave={stillSelectedColor}
          className="chooseTemplate-container-themes-colors"
        >
          <ThemeColors
            themeColorChangeByHover={themeColorChangeByHover}
            colors={colors}
            selectColor={selectColor}
          />
        </div>
        <div className="chooseTemplate-container-themes-select">
          <Link
            onClick={storageThemeInLocalStorage}
            to={`/create?theme=${storageTHeme}&color=${storageColor}`}
          >
            Select This Template
          </Link>
        </div>
        <div className="chooseTemplate-container-themes-arrows">
          <div title="Change Theme" onClick={changeTheme}>
            <Button className="change-btn" color="warning">
              Change Theme
            </Button>
          </div>
        </div>
      </div>
      <div className="chooseTemplate-container-template">
        {themeToggle ? (
          <AngoraTheme data={data} loading={loading} themeColor={themeColor} />
        ) : (
          <BlueprintTheme
            data={data}
            loading={loading}
            themeColor={themeColor}
          />
        )}
      </div>
    </div>
  );
};

export default ChooseTemplate;
