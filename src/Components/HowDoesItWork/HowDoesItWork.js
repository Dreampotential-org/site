import React from "react";
import "./howdoesitwork.css";
const HowDoesItWork = () => {
  return (
    <div className="container  text-dark text-decoration-none">
      {/* <h2 className="text-white fw-bolder heading">How does it work</h2> */}
      <h2 className=" solution fw-bolder heading">How does it work</h2>
      <div className="text-white section-ul fs-4">
        <ul className="m-5 solution">
          <li>
            Entrepreneurs with XYZ idea are invited/apply to Dream Potential
            Safe harbor incubator Program
          </li>
          <li>
            Dream Potential provides accelerated technology services for XYZ
            company
          </li>
          <li>
            XYZ receives shares in Dream Potential and Dream Potential receives
            shares in XYZ company.
          </li>
          <li>Dream Potential and it's stakeholders work together on XYZ</li>
          <li>
            Even if XYZ fails, their Dream Potential shares remain in game
            divesified among lots of XYZ's. Best ideas and key technologies work
            out.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowDoesItWork;
