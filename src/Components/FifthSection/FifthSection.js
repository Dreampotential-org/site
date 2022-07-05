import React from 'react'
import "./FifthSection.css"
import GettyImages from "../../assets/GettyImages.png";
import GettyImages1 from "../../assets/GettyImages1.png";
import GettyImages2 from "../../assets/GettyImages2.png";
import GettyImages3 from "../../assets/GettyImages3.png";
import TitleandText from '../TitleandText/TitleandText';



const FifthSection = () => {
  return (
    <>
    <div className='fifth-back'>
        <div className='container pt-5'>
        <TitleandText
            title="Lorem Ipsum"
            content="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
            subcontent="Lorem Ipsum And More Recently With Desktop"
          />
          
            <div className='row pt-5'>
                <div className='col-md-6 mar'>
                <img
                  className="fourth-sec-img img-fluid"
                  src={GettyImages}
                  alt="icon"
                />
                </div>
                <div className='col-md-6 mar'>
                <img
                  className="fourth-sec-img img-fluid"
                  src={GettyImages1}
                  alt="icon"
                />
                </div>
            </div>
            <div className='row pb-5'>
                <div className='col-md-6 mar'>
                <img
                  className="fourth-sec-img img-fluid"
                  src={GettyImages2}
                  alt="icon"
                />
                </div>
                <div className='col-md-6 mar'>
                <img
                  className="fourth-sec-img img-fluid"
                  src={GettyImages3}
                  alt="icon"
                />
                </div>
            </div>
        </div>
    </div>        
    </>
  )
}

export default FifthSection