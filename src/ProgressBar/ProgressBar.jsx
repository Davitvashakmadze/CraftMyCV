import { Progress } from "reactstrap";

import "./ProgressBar.scss";

const ProgressBar = ({ findOuFillInput }) => {
  return (
    <div>
      <Progress
        className="progress-bar-container"
        color="info"
        value={(findOuFillInput / 7) * 100}
      ></Progress>
    </div>
  );
};

export default ProgressBar;
