import React from "react";
import TitleandText from "../TitleandText/TitleandText";
import "./CircleSection.css";

const CircleSection = () => {
  return (
    <>
      <div className="circle-back">
        <div className="container pt-5">

        
        <TitleandText
            title="Lorem Ipsum"
            content="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
            subcontent="Lorem Ipsum And More Recently With Desktop"
          />
          
                <div class="row mt-5">
                    <div className="circle-row">
                    <div class="col">
                        <div className="circle"></div>
                        <p className="lorem-circle-text">Lorem Ipsum is simply dummy text of the</p>
                    </div>
                    <div class="col">
                        <div className="circle-2"></div>
                        <p className="lorem-circle-text">Lorem Ipsum is simply dummy text of the</p>
                    </div>
                    <div class="col">
                        <div className="circle"></div>
                        <p className="lorem-circle-text">Lorem Ipsum is simply dummy text of the</p>
                    </div>
                    </div>
                </div>
          
      
        </div>
      </div>
    </>
  );
};

export default CircleSection;
