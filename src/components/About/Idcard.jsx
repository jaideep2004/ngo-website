import React from 'react';
import './idcard.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Idcard = (props) => {

  useEffect(() => {
		AOS.init();
  }, []);
  
  const{name,designation,id,sonOf,phone,bloodG}=props
  return (
    <div className="idmain" data-aos='fade-right'  data-aos-duration="500">
      <div className="contain">
        <div className="orangecontainer">
          <div className="topcontainer">
            <img src="./images/logo5.png"  alt="" />
          </div>
          <div className="container2">ID CARD</div>
          <div className="container3">
            <img src="./images/profilepic.png" width="100px" height="100px" alt="" className="profilecontainer" />
          </div>
        </div>

        <div className="bluecontainer">
          <div className="container4">{name}</div>
          <div className="design">{designation}</div>

          <div className="details">
            <div>ID No :{id}  </div>
            <div>S/O :{sonOf} </div>
            <div>PHONE :{phone} </div>
            <div>BLOOD GROUP :{bloodG} </div>
          </div>
          <div className="container5"><img src="barcode1.png" width="250px" alt="" /></div>
        </div>
      </div>
    </div>
  );
};

export default Idcard;
