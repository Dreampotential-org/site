import React from "react";
import "./MemberShipCard.css";
import { Card } from "react-bootstrap";
import { BsCheckCircleFill } from "react-icons/bs";
import TitleandText from "../TitleandText/TitleandText";

const MemberShipCard = () => {
  const cardData = [
    {
      Title: "Lorem Ipsum is simply",
      Text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />,
      icontext: "Document what you have in mind",
    },
    {
      Title: "Lorem Ipsum is simply",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />,
      icontext: "Document what you have in mind",
    },
    {
      Title: "Lorem Ipsum is simply",
      Text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />,
      icontext: "Document what you have in mind",
    },
    {
      Title: "Lorem Ipsum is simply",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />,
      icontext: "Document what you have in mind",
    },
    {
      Title: "Lorem Ipsum is simply",
      Text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />,
      icontext: "Document what you have in mind",
    },
    {
      Title: "Lorem Ipsum is simply",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />,
      icontext: "Document what you have in mind",
    },
  ];

  return (
    <>
      <div className="membership-back">
        <div className="container">
          <div className="row">
            <TitleandText content="Membership Package and Pricing Plan" />
            {cardData.map((name, index) => (
              <div className="col-sm" key={index}>
         
                    <Card className="card_section-membership" >
                    <Card.Body className="back-color-membership">
                        <Card.Text className="text-membership-title my-4">
                        {name.Title}
                        </Card.Text>
                        <Card.Text className="text-membership">
                        {name.Text}
                        </Card.Text>
                        <div className="py-3">
                            <div className="img-icon">
                            {name.icon}
                            <div className="img-icon-text">
                                <p className="conference-text text-membership-icon">
                                {name.icontext}
                                </p>
                            </div>
                            </div>
                            <div className="img-icon py-2">
                            {name.icon}
                            <div className="img-icon-text">
                                <p className="conference-text text-membership-icon">
                                {name.icontext}
                                </p>
                            </div>
                            </div>
                            <div className="img-icon">
                            {name.icon}
                            <div className="img-icon-text">
                                <p className="conference-text text-membership-icon">
                                {name.icontext}
                                </p>
                            </div>
                            </div>
                        </div>
                        <button
                        type="button"
                        className="my-4 membership-btn-learn-more btn-primary "
                        >
                        LEARN MORE
                        </button>
                    </Card.Body>
                    </Card>
                </div>
       
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberShipCard;
