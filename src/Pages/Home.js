import React, { useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from '../Components/Navbar/Navbar';
import Hero from '../Components/HeroSection/Hero';
import Middle from '../Components/MiddleSection/Middle';
import Select_Partners from '../Components/Select_Partners/Select_Partners';
import GetInTouch from '../Components/GetInTouch/GetInTouch';
import Footer from '../Components/Footer/Footer';
import NewHero from '../Components/NewHeroSection/NewHero';
import Iframe from '../Components/Iframe/Iframe';
import MyCarousel from '../Components/Carousel/Carousel';
import CardSection from '../Components/CardSection/CardSection';
import Select from '../Components/Select/Select';
import Lorem from '../Components/Lorem/Lorem';
import GetIn from '../Components/GetIn/GetIn';
import FourthSection from '../Components/FourthSection/FourthSection';
import FifthSection from '../Components/FifthSection/FifthSection';
import CircleSection from '../Components/CircleSection/CircleSection';
import JoinUs from '../Components/JoinUs/JoinUs';

const Home = () => {
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
        {/* <div className="back">
          <NavbarSection onClick={scrollDown}/>
          <Hero  onClick={scrollDown}/>
          <Middle onClick={scrollDown}/>
        </div> */}
        <NewHero onClick={scrollDown}/>
        {/* <MyCarousel/> */}
        <CardSection onClick={scrollDown}/>
        <Select/>
        <FourthSection onClick={scrollDown}/>
        <FifthSection/>
        <CircleSection/>
        <JoinUs onClick={scrollDown}/>
        <Lorem />
        <GetIn/>
        {/* <Select_Partners /> */}
        {/* <Iframe/> */}
        <div className="section section2" ref={aboutSection}>
          {/* <GetInTouch /> */}
        </div>
        <Footer onClick={scrollDown}/>
      </div>
    </>
  );
}

export default Home;
