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
                <div className="back">
                    {/* <NavbarSection onClick={scrollDown} /> */}
                    <NewNav onClick={scrollDown}/>
                    <TextSection
                        title='Dream Labs'
                        description={[
                            'Dream Labs Solves large, open-ended problems where the high-level nature of the solution is unclear.',
                            'Your Integration Partner to drive and implement clear solutions to often large open-ended problems.'
                        ]} />                 
                </div>
                {/* <Select_Partners /> */}
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
