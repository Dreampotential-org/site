import React from 'react'
import './Lorem.css'
import group_img from "../../assets/group-img.png";
import laptop_img from "../../assets/laptop-img.png";
import laptop from "../../assets/laptop.png";
import network_img from "../../assets/network-img.png";
import TitleandText from '../TitleandText/TitleandText';

const Lorem = () => {
  return (
    <>
    <div className='lorem'>
      <div class="container">
        <div className='py-5'>
            <TitleandText
              title="Lorem Ipsum"
              content="Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry."
              subcontent="Lorem Ipsum And More Recently With Desktop"
            />
            
        </div>
            <div class="row">
                <div class="side-1 col-md-8">
                <img
                  className="common_img img-fluid"
                  src={group_img}
                  alt="icon"
                />
                </div>
                <div class="side-2 col-md-4">
                <img
                  className="common_img img-fluid"
                  src={laptop_img}
                  alt="icon"
                />
                </div>
            </div>

            <div class="row pb-5">
                <div class="side-2 col-md-4">
                <img
                  className="common_img img-fluid"
                  src={laptop}
                  alt="icon"
                />
                </div>
                <div class="side-1 col-md-8">
                <img
                  className="common_img img-fluid"
                  src={network_img}
                  alt="icon"
                />
                </div>
            </div>

      </div>
    </div>
    </>
  )
}

export default Lorem