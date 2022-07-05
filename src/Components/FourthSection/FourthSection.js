import React from "react";
import "./FourthSection.css";
import Man from "../../assets/Man.png";
import Man2 from "../../assets/Man2.png";
import TitleandText from "../TitleandText/TitleandText";

const FourthSection = ({onClick}) => {
  return (
    <>
      <div className="fourth-back">
        <div className="container pt-5">
          <TitleandText
            title="Lorem Ipsum"
            content="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
            subcontent="Lorem Ipsum And More Recently With Desktop"
          />
          
          <div className="row pt-5">
            <div className="col-md-6">
              <img className="img-fluid" src={Man} alt="icon" />
            </div>
            <div className="col position-relative">
              <div className="right-img">
                <h1 className="lorem-title pb-3">Lorem Ipsum</h1>
                <p className="lorem-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum and more recently with
                  desktop .
                </p>

                <div className="mt-5">
                  <button type="button" className="btn-join btn-primary" onClick={onClick}>
                    JOIN US
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-sm-12 col-md-6 pt-5 position-relative">
              <div className="right-img">
                <h1 className="lorem-title pb-3">Lorem Ipsum</h1>
                <p className="lorem-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum and more recently with
                  desktop .
                </p>
                <div className="mt-5">
                  <button type="button" className="btn-join btn-primary" onClick={onClick}>
                    JOIN US
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 mt-5">
              <img className="img-fluid" src={Man2} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
