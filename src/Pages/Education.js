import React, { useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from '../Components/Navbar/Navbar';
import Select_Partners from '../Components/Select_Partners/Select_Partners';
import GetInTouch from '../Components/GetInTouch/GetInTouch';
import Footer from '../Components/Footer/Footer';
import TextSection from '../Components/TextSection/TextSection';

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
                    <NavbarSection onClick={scrollDown} />
                    <TextSection
                        title='Dream Education'
                        description={[
                            'Dream Education Solves large, open-ended problems where the high-level nature of the solution is unclear.',
                            'Your Integration Partner to drive and implement clear solutions to often large open-ended problems.'
                        ]} />
                    {/* <div style={{ height: 300 }}></div> */}
                </div>
                <Select_Partners />
                <div className="section section2" ref={aboutSection}>
                    <GetInTouch />
                </div>
                <Footer onClick={scrollDown} />
            </div>
        </>
    );
}

export default Labs;
