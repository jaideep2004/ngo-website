


// import React from "react";
// import { useParams } from "react-router-dom";

// const ActivityContent = ({ projects }) => {
//   const { id } = useParams();
//   const project = projects.find((p) => p.id === parseInt(id));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   console.log("Project:", project);
//   const imageSrc = `/${project.imgsrc}`; // Constructing the relative path

//   return (
//     <div>
//       <h2>{project.cardhead}</h2>
//       <img src={imageSrc} alt={project.cardhead} />
//       <p>{project.description}</p>
//     </div>
//   );
// };

// export default ActivityContent;

import React from "react";
import { useParams } from "react-router-dom";

const ActivityContent = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log("Project:", project); // Check if the project object contains the correct imgsrc

  // Constructing the image source path dynamically
  const imageSrc = `/${project.imgsrc}`;

  // Splitting the cardhead into main part and bracketed part
  const cardheadParts = project.cardhead.split("(");
  const mainPart = cardheadParts[0].trim(); // Main part before the bracket
  const bracketPart = cardheadParts[1] ? `(${cardheadParts[1]}` : ''; // Bracket part (if exists)

  return (
    <div>
      <h2>{mainPart}</h2> {/* Display the main part of cardhead */}
      <h5>{bracketPart}</h5> {/* Display the bracket part of cardhead */}
      <img src={imageSrc} alt={project.cardhead} />
      <p>{project.description}</p>
    </div>
  );
};

export default ActivityContent;
