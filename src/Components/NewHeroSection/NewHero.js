import React from "react";
import "./NewHero.css";
import Layer_1 from "../../assets/Rocket_Header.svg";
import NewNav from "../Nav/Nav";

const NewHero = ({onClick}) => {
  return (
    <>
      <div className="hero-background">
        <NewNav onClick={onClick}/>
        <div className="container">
          <div className="row">
            <div className="col-md-6 pt-5 right-text-center">
              <div>
              <p className="text-one">
                Bring us your dreams.
              </p>
              <p className="text-one">
                We’ll make them a reality.
              </p>
              
              <p className="text-sub-para mt-5">
                We serve conscious entrepreneurs in their ambitions to make meaningful impact in education, e-commerce and media.
              </p>
              <div className="mt-5">
                <button type="button" className="btn-join btn-primary" onClick={onClick}>
                  JOIN US
                </button>
              </div>
              </div>
            </div>
            <div class="Layer_1 col-md-6 pt-5  mb-5" >
              {/* <img className="Layer_1" src={Layer_1} alt="Frame" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHero;
