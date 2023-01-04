import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}

 

const Header = () => (

  <div id="home" className="app__header app__flex">
    <motion.div
      initial={{ x: -100}}
      animate={{ x: 0 }}
      transition={{duration: 1}}
      className ="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span className='wave'>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Nabintou</h1>
          </div>
        </div>
       
        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
        
      </div>
      
    </motion.div>

    
    <motion.div
      
      //animate={{ x: 0 }}
      //transition={{ duration: 1 }}
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        //initial={{ x: -100 }}
        animate={{ x: 1 }}
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle floating"
      
      />
    </motion.div>

    

    
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.variants}
      className="app__header-circles"
    >
      {[images.react].map((circle, index) => (
        <div className="circle-cmp app__flex floating" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
      {[images.node].map((circle, index) => (
        <div className="circle-cmp app__flex floating" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
      {[images.git].map((circle, index) => (
        <div className="circle-cmp app__flex floating" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
      

  </div>
);
//export default AppWrap(Header, 'home');
export default AppWrap(
  MotionWrap(Header, 'app__home'),
  'home',
  'app__whitebg',
);