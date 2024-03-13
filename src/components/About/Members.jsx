import React from 'react'
import Idcard from './Idcard'
import './members.css'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Members = () => {
    useEffect(() => {
		// Scroll to the top when the component mounts
		window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    
    useEffect(() => {
		AOS.init();
	}, []);
    return (
      
      
      <div>
          <div className="memberswrapper">
              <div className="memhead" data-aos='fade-down'  data-aos-duration="500">
                  <h1>Our Members</h1>
              </div>
              <div className="idcardcon">
                  <Idcard name="NAME" designation="DESIGNATION"/>
                  <Idcard  name="NAME"designation="DESIGNATION"/>
                  <Idcard  name="NAME"designation="DESIGNATION"/>
                  <Idcard  name="NAME" designation="DESIGNATION"/>
              </div>
          </div>
    </div>
  )
}

export default Members