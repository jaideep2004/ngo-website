import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Main5 = () => {

  useEffect(() => {
		AOS.init();
  }, []);
  
  return (
      <div className='main5comp'>
          <div className="main5wrapper">
              
              <div className="main5con"  style={{backgroundImage:'url("./images/h4.jpg")'}}>
                  <h1  data-aos='zoom-in-down' data-aos-duration='500'>Join your hands with us for a
better life and future</h1>
              </div>
          </div>
    </div>
  )
}

export default Main5