import React, { useRef } from 'react';
import Sell from '../components/Sell';
import Navbar from '../components/Navbar';
import Star from '../components/Star';
import Connect from '../components/Connect';
import VideoFrame from '../components/VideoFrame';
import Features from '../components/Features';
import FeedbackPoster from '../components/FeedbackPoster'
import Community from '../components/Community';
import Courses from '../components/Courses';
import Steps from '../components/Steps';
import Review from '../components/Review';
import Integeration from '../components/Integeration';
import Product from '../components/Product';
import Facility from '../components/Facility';
import Automation from '../components/Automation';
import Tools from '../components/Tools';
import SmallFrame from '../components/SmallFrame';
import Footer from '../components/Footer';
import Plan from '../components/Plan';
import MemeberShip from '../components/MemeberShip';

const Home = ({user}) => {
  const sectionRef = useRef(null);


  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-white w-full min-h-screen">
      <Sell />
      <Navbar user={user} />
      <main className="text-gray-900">
        <Star />
        <Connect />
        <VideoFrame />
        <Features onScrollClick={handleScroll} />
        <FeedbackPoster />
        <Community />
        <Courses onScrollClick={handleScroll} />
        <div className='mt-12'>
          <Steps onScrollClick={handleScroll} />
        </div>
        <Review />
        <div className='mt-12'>
          <Integeration />
        </div>
        <div className='mt-16'>
          <Product onScrollClick={handleScroll} />
        </div>

        <div className='mt-16'>
          <Facility />
        </div>
        <div className='mt-16'>
          <Automation />
        </div>
        <Tools onScrollClick={handleScroll} />
        <div>
          <Courses onScrollClick={handleScroll} />
        </div>

          <MemeberShip onScrollClick={handleScroll}/>

        <div ref={sectionRef} className='mt-12'>
          <Plan />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
