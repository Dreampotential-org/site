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
          <div className="row pt-5 pb-5">
            <div className="col-md-6 pt-5">
              <p className="text-one">
                Bring us your dreams.We’ll make them a reality.
              </p>
              <p className="text-sub-para mt-4">
                We serve conscious entrepreneurs in their ambitions to make meaningful impact in education, e-commerce and media.
              </p>
              <div className="mt-5">
                <button type="button" className="btn-join btn-primary" onClick={onClick}>
                  JOIN US
                </button>
              </div>
            </div>
            <div class="Layer_1 col-md-6 pt-5">
              {/* <img className="Layer_1" src={Layer_1} alt="Frame" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHero;
