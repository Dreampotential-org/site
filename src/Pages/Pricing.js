import React, { useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from '../Components/Navbar/Navbar';
import Select_Partners from '../Components/Select_Partners/Select_Partners';
import GetInTouch from '../Components/GetInTouch/GetInTouch';
import Footer from '../Components/Footer/Footer';
import TextSection from '../Components/TextSection/TextSection';
import Select from '../Components/Select/Select';
import Problem from "../Components/Problem/Problem"
import HowDoesItWork from "../Components/HowDoesItWork/HowDoesItWork"
import GetIn from '../Components/GetIn/GetIn';
import NewNav from '../Components/Nav/Nav';
import TitleandText from '../Components/TitleandText/TitleandText';
import "./Labs.css"
import "./Pricing.css"
import CircleSection from '../Components/CircleSection/CircleSection';
import FifthSection from '../Components/FifthSection/FifthSection';
import Lorem from '../Components/Lorem/Lorem';

const Pricing = () => {
    const aboutSection = useRef(null);
    const scrollDown = () => {
        window.scrollTo({
            top: aboutSection.current.offsetTop,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <div className="App">
                <div className="back mt-5 pt-5">
                    <NewNav className="back mt-5 pt-5" onClick={scrollDown}/>
                </div>
                <div className='row Price-div'>
                <div className='col-4 first-col'>
                <div className='Starter'>
                <div className=' container col-md-8'>
                <h1>Starter</h1>
                <p>For individuals</p>
                <h3>Free</h3>
                <button type="button" class="btn btn-primary free-btn">Sign Up, It's Free </button>
                {/* <div className='container col-8 content-div'> */}
                <h6>includes:</h6>
                <ul>
                <li>Up to 25 videos/person</li>
                <li>Up to 5 mins/video</li>
                </ul>
                
                 {/* </div> */}
                 <hr />
                 <h6>Key Features</h6>
                <ul>
                <li>Up to 25 videos/person</li>
                <li>Up to 5 mins/video</li>
                 <li>Up to 25 videos/person</li>
                <li>Up to 5 mins/video</li>
                 <li>Up to 25 videos/person</li>
                
                </ul>
                </div>
                
                
                </div>
                </div>
               
                 <div className='col-4 sec-col '>
                 <div className='Business Starter'>
                   <div className=' container col-md-8'>
                <h1>Business</h1>
                <p>For teams</p>
                <h3>$12.50 <span className='usd'>USD/Creator/mo (annually)</span></h3>
                <button type="button" class="btn btn-primary free-btn">Start Free 14-day Trial </button>
                {/* <div className='container col-8 content-div'> */}
                <h6>includes:</h6>
                <ul>
                <li>Unlimited videos</li>
                <li>Unlimited recording length</li>
                </ul>
                
                 {/* </div> */}
                 <hr />
                 <h6>Everything in Starter, plus</h6>
                <ul>
                <li>Loom AI add-on available</li>
                <li>Remove Loom branding</li>
                 <li>Embed links in video</li>
                <li>Import & download</li>
                 <li>Password protected videos</li>
                
                </ul>
                </div>
                 </div>
                 </div>
                  <div className='col-4 third-col'>
                  <div className='Enterprise Starter'>
                   <div className=' container col-md-8'>
                <h1>Enterprise</h1>
                <p>For scaling teams</p>
                <h3>Let’s Talk</h3>
                <button type="button" class="btn btn-primary free-btn">Contact Sales </button>
                {/* <div className='container col-8 content-div'> */}
                <h6>includes:</h6>
                <ul>
                <li>Unlimited videos</li>
                <li>Unlimited recording length</li>
                </ul>
                
                 {/* </div> */}
                 <hr />
                 <h6>Key Features</h6>
                <ul>
                <li>Up to 25 videos/person</li>
                <li>Up to 5 mins/video</li>
                 <li>Up to 25 videos/person</li>
                <li>Up to 5 mins/video</li>
                 <li>Up to 25 videos/person</li>
                
                </ul>
                </div>
                  </div>
                  </div>
                </div>
                
                <Footer onClick={scrollDown} />
            </div>
        </>
    );
}

export default Pricing;
