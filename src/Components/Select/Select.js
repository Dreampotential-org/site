import React from "react";
import "./Select.css";
import RePicture from "../../assets/RePicture.png";
import AgentStat from "../../assets/AgentStat.png";
import OnceAt from "../../assets/OnceAt.png";
import Neighbormade from "../../assets/DP-Logos-01.png";
import NoScrollDreamReader from "../../assets/NoScrollDreamReader.png";
import SanFrancisco from "../../assets/SanFrancisco.png";
import ChiropractorTech from "../../assets/ChiropractorTech.png";
import DP from "../../assets/DP-Logos-03.svg";
import IAMLogo from "../../assets/I-AM-Logo-04.svg";
import Viaduct from "../../assets/Viaduct-Logo-05.svg";
import CenteredModal from "../CenteredModal/CenteredModal";
import Marquee from "react-fast-marquee";

const Select = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalcontent, setModalcontent] = React.useState({
    title: "",
    discription: [],
    buttonText: "",
    videoURL: "",
  });
  const [discription, setDiscription] = React.useState([]);

  const partnersClick = (title, discription, buttonText, videoURL, iframe) => {
    setModalcontent({
      title: title,
      discription: discription,
      buttonText: buttonText,
      videoURL: videoURL,
      iframe: iframe,
    });
    setModalShow(true);
    // setTitle(title)
    setDiscription(discription);
  };

  return (
    <>
      <div className="select-back">
        <div className="container">
          <h1 className="title-selectPartners pt-5">Select Partners</h1>
          <p className="text-content-selectPartners mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-content-selectPartners">
            Lorem Ipsum and more recently with desktop .
          </p>

          <CenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            modalcontent={modalcontent}
          />

          <Marquee direction="right" gradient={false}>
            <div className="row custom-div-top pt-5 pb-5">
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick(
                      "RePicture",
                      [
                        `EXPLORE SCIENCE, TECHNOLOGY, ENGINEERING AND CULTURE PROJECTS GOING ON ALL AROUND THE WORLD REPICTURE`,
                      ],
                      "",
                      "https://agentstat.com/video/GETSTAT-7-11.10.2020.mp4"
                    )
                  }
                >
                  <img
                    className="img-fluid common-img"
                    src={RePicture}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick(
                      "AgentStat ",
                      [
                        `Real Estate Agent Search Engine allows home owner to find best agent to sell their house based on data.`,
                        `Pick right Agent every time`,
                      ],
                      "",
                      "https://agentstat.com/video/GETSTAT-7-11.10.2020.mp4"
                    )
                  }
                >
                  <img
                    className="img-fluid common-img"
                    src={AgentStat}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick(
                      "IAM ",
                      [
                        `INTERACTIVE ACCOUNTABILITY TECHNOLOGY `,
                        `Behavioral Health Science Platform`,
                        `Digital Medication Monitoring`,
                      ],
                      "",
                      "",
                      "https://www.youtube.com/watch?v=_debXPUnJkQ"
                    )
                  }
                >
                  <img className="common-img" src={IAMLogo} alt="icon" />
                </div>
              </div>
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick(
                      "OnceAt",
                      [
                        `We live in a beautiful world, surrounded by amazing people pursuing wonderful interests. OnceAt is our honest attempt to connect you with your ever changing surroundings. Create and participate in meaningful conversations. Live life in the moment as the world itself is of flickering temporary nature.`,
                      ],
                      "",
                      ""
                    )
                  }
                >
                  <img
                    className="img-fluid common-img"
                    src={OnceAt}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick(
                      "Neighbormade",
                      [
                        `For the Love of Local`,
                        `Neighbormade is a marketplace that empowers people to start small businesses and sell their creations locally and sustainably.`,
                        `Goodbye, e-commerce. Hello, we-commerce.`,
                        `Building robust communities through positive actions.`,
                      ],
                      "",
                      ""
                    )
                  }
                >
                  <img
                    className="img-fluid common-img"
                    src={Neighbormade}
                    alt="icon"
                  />
                </div>
              </div>
            </div>
          </Marquee>

          <Marquee gradient={false}>
            <div className="row custom-div-bottom pb-5">
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick(
                      "No Scroll Dream Reader ",
                      [
                        `Texted Comprehension AI`,
                        `Science based to increase your stamina using latest Natural Language processing techniques.`,
                      ],
                      "",
                      "https://agentstat.com/video/GETSTAT-7-11.10.2020.mp4"
                    )
                  }
                >
                  <img
                    className="img-fluid logo-NoScroll"
                    src={NoScrollDreamReader}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick("Action App ", [
                      `Action App is onramp to social services, wellness and your self service Action portal.`,
                    ])
                  }
                >
                  <img
                    className="img-fluid logo-San"
                    src={SanFrancisco}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick(
                      "Chiropractor Tech",
                      [
                        `How is your body alignment?`,
                        `Get your instant frame analysis and receive a free posture report in 60 seconds.`,
                      ],
                      "Free AI Posture Report"
                    )
                  }
                >
                  <img
                    className="common-img"
                    src={ChiropractorTech}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick("CSR Widget", [
                      `Add video customer support to any any website 123 CSR widget.`,
                    ])
                  }
                >
                  <img
                    className="img-fluid common-img"
                    src={Viaduct}
                    alt="icon"
                  />
                </div>
              </div>
              <div className="col">
                <div
                  className="box"
                  onClick={() =>
                    partnersClick("Manifest Now", [
                      `Spiritual Magic Visualization`,
                      `7 day program`,
                      `Manifest Now`,
                    ])
                  }
                >
                  <img className="img-fluid common-img" src={DP} alt="icon" />
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Select;
