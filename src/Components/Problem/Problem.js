import React from "react";
import "./Problem.css";
const Problem = () => {
  return (
    <div className="container  text-dark mb-5 problem-section">
      <h2 className="text-white fw-bolder heading">Problem</h2>
      <div className="text-white fs-4">
        <ul className="m-5">
          <li>
            Starting point - dicatates level of risk one can expose themselves.
          </li>
          <li>Thresholds to risk prevents empowerment.</li>
        </ul>
        <ul className="m-5">
          <li>1/100 entrepreneurs get their businesses off the ground.</li>
          <li>Lots of great ideas often sit on the sideline to long</li>
        </ul>
      </div>
    </div>
  );
};

export default Problem;