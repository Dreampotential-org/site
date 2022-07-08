import React, { useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from '../Components/Navbar/Navbar';
import Select_Partners from '../Components/Select_Partners/Select_Partners';
import GetInTouch from '../Components/GetInTouch/GetInTouch';
import Footer from '../Components/Footer/Footer';
import TextSection from '../Components/TextSection/TextSection';
import Select from '../Components/Select/Select';
import GetIn from '../Components/GetIn/GetIn';
import NewNav from '../Components/Nav/Nav';
import TitleandText from '../Components/TitleandText/TitleandText';
import "./Labs.css"
import CircleSection from '../Components/CircleSection/CircleSection';
import FifthSection from '../Components/FifthSection/FifthSection';
import Lorem from '../Components/Lorem/Lorem';

const Labs = () => {
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
                    {/* <NavbarSection onClick={scrollDown} /> */}
                    <NewNav className="back mt-5 pt-5" onClick={scrollDown}/>
                    {/* <TextSection
                        title='Dream Labs'
                        description={[
                            'Dream Labs Solves large, open-ended problems where the high-level nature of the solution is unclear.',
                            'Your Integration Partner to drive and implement clear solutions to often large open-ended problems.'
                        ]} />                  */}
                </div>
                {/* <Select_Partners /> */}
                {/* <TitleandText 
                title="Dream Labs"
                subcontent="Dream Education Solves Large, Open-Ended Problems Where The High-Level Nature Of The Solution Is Unclear.
                            Your Integration Partner To Drive And Implement Clear Solutions To Often Large Open-Ended Problems."
                className="labs"
                /> */}
                <div className='labs-back'>
                    <div className='lab-div my-5 py-5'>    
                        <h1 className='labs-title'>Dream Labs</h1>
                        
                        <p className='labs-text'>Dream Education Solves Large, Open-Ended Problems Where The High-Level Nature Of The Solution Is Unclear.</p>
                        <p className='labs-text'>Your Integration Partner To Drive And Implement Clear Solutions To Often Large Open-Ended Problems.</p>
                    </div>
                </div>
                <CircleSection/>
                <FifthSection/>
                <Lorem/>
                <Select/>
                <GetIn/>
                <div className="section section2" ref={aboutSection}>
                    {/* <GetInTouch /> */}
                </div>
                <Footer onClick={scrollDown} />
            </div>
        </>
    );
}

export default Labs;
