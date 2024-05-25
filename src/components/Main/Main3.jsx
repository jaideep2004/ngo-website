

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import ProjectCard from "./ProjectCard";
// import projects from "../data/data"; // Import projects data from data.js

// const Main3 = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const CustomPrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="customprevarrow" onClick={onClick}>
//         <i class="fa-solid fa-angles-left"></i>
//       </div>
//     );
//   };

//   const CustomNextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div className="customnextarrow" onClick={onClick}>
//         <i class="fa-solid fa-angles-right"></i>
//       </div>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   return (
//     <div>
//       <div className="main3wrapper">
//         <div className="main3head">
//           <h3 data-aos="fade-right">What We Are Doing</h3>
//           <h2 data-aos="zoom-in-up" data-aos-duration="1000">
//             We Are On A Mission To Help The Helpless
//           </h2>
//         </div>

//         <div className="main3con">
//           <Slider {...settings}>
//             {projects.map((project) => (
//               <ProjectCard
//                 key={project.id}
//                 imgsrc={project.imgsrc}
//                 cardhead={project.cardhead}
//               />
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main3;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import projects from "../data/data"; // Import projects data from data.js

const Main3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="customprevarrow" onClick={onClick}>
        <i className="fa-solid fa-angles-left"></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="customnextarrow" onClick={onClick}>
        <i className="fa-solid fa-angles-right"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <div className="main3wrapper">
        <div className="main3head">
          <h3 data-aos="fade-right">What We Are Doing</h3>
          <h2 data-aos="zoom-in-up" data-aos-duration="1000">
            We Are On A Mission To Help The Helpless
          </h2>
        </div>

        <div className="main3con">
          <Slider {...settings} >
            {projects.map((project) => (
              <Link to="/activities" key={project.id} className="frontslider">
                <ProjectCard
                  imgsrc={project.imgsrc}
                  cardhead={project.cardhead}
                />
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Main3;
