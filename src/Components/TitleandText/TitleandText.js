import React from "react";
import "./TitleandText.css";

const TitleandText = (props) => {
  return (
    <>
      <div className="TitleandText">
        <div className="container pt-3">
          <div className="row">
            <div>
              <h1 className="component-title-text" style={props.style}>
                {props.title}
              </h1>
              <p className="component-text-content pt-4" style={props.style}>
                {props.content}
              </p>
              <p className="component-text-content" style={props.style}>
                {props.subcontent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleandText;
