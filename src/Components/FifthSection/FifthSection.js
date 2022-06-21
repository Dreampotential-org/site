import React from 'react'
import "./FifthSection.css"
import GettyImages from "../../assets/GettyImages.png";
import GettyImages1 from "../../assets/GettyImages1.png";
import GettyImages2 from "../../assets/GettyImages2.png";
import GettyImages3 from "../../assets/GettyImages3.png";



const FifthSection = () => {
  return (
    <>
    <div className='fifth-back'>
        <div className='container'>
            <div className='pt-5'>
                <h1 className='title-select-fifth pt-5'>Lorem Ipsum</h1>
                <p className='text-content-lorem mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> 
                <p className='text-content-lorem pb-5'>Lorem Ipsum and more recently with desktop .</p>
            </div>
            <div className='row'>
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