// import React, { useState } from "react";
// import { handleDownload } from "./downloadPDF";

// const MyExpertise = () => {

//     //figma html web-application database-management-system web-development redux bootstrap javascript mysql git react.js spring-boot jquery java css


//     const [skills , setSkills] = useState([{id: 1, tytle: "figma"}, {id: 2, tytle:"html"}, {id: 3, tytle:"web application"}, {id: 4, tytle:"database-management-system"}, {id: 5, tytle:"web development"}, {id: 6, tytle:"redux"}, {id: 7, tytle:"bootstrap"}, {id: 8, tytle:"javascript"}, {id: 9, tytle:"mysql"}, {id: 10, tytle:"git"}, {id: 12, tytle:"react.js"}, {id: 13, tytle:"spring boot"}, {id: 14, tytle:"jquery"}, {id: 15, tytle:"java"}, {id: 17, tytle:"css"}])

//     const handleClick = () => {
//         const url = "http://localhost:3000/Akash_Adhikary_Cover_Letter.pdf";
//         handleDownload(url)
//     }


//   return (
//     <>
//       <div className="mt-5" >
//         <h1 className="text-4xl mb-16 font-bold underline text-center">
//           My Expertise
//         </h1>
//         <div className="flex py-16 items-center" style={{
//           backgroundImage: `url('image.jpg')`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}>
//           <div className="flex justify-center">
//            <div className="w-2/3 text-center space-y-3">
//            <h1 className="text-4xl font-bold">I love these technologies</h1>
//             <p>
//               i am happy to learn these technologies.Hope in future i will learn
//               new things for my skill set
//             </p>
//             <button className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl" onClick={handleClick}>
//               Download Cover Letter
//             </button>
//            </div>
//           </div>
//           <div className="flex justify-center">
//             <div className="flex w-2/3 h-fit space-y-3 flex-wrap justify-center items-center">
//               {skills.map((elem) => (
//                  <p id={elem.id} className="bg-gray-300 mx-1 w-fit mt-4 px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-gray-400">{elem.tytle}</p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyExpertise;


















import React, { useState } from "react";
import { handleDownload } from "./downloadPDF";

const MyExpertise = () => {
  const [skills, setSkills] = useState([
    { id: 1, title: "figma" },
    { id: 2, title: "html" },
    { id: 3, title: "web application" },
    { id: 4, title: "database-management-system" },
    { id: 5, title: "web development" },
    { id: 6, title: "redux" },
    { id: 7, title: "bootstrap" },
    { id: 8, title: "javascript" },
    { id: 9, title: "mysql" },
    { id: 10, title: "git" },
    { id: 12, title: "react.js" },
    { id: 13, title: "spring boot" },
    { id: 14, title: "jquery" },
    { id: 15, title: "java" },
    { id: 17, title: "css" },
  ]);

  const handleClick = () => {
    const url = "http://localhost:3000/Akash_Adhikary_Cover_Letter.pdf";
    handleDownload(url);
  };

  return (
    <>
      <h1 className="text-4xl mb-10 font-bold underline text-center">
        My Expertise
      </h1>
      <div
        className="flex flex-col lg:flex-row justify-between items-center py-5 px-20"
        style={{
          backgroundImage: `url('image.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full lg:w-1/2 mx-auto lg:mx-10">
          <h1 className="text-4xl font-bold text-center lg:text-left">
            I love these technologies
          </h1>
          <p className="text-center lg:text-left">
            my passion and enthusiasm for the diverse array of tools and frameworks that power modern software development. From front-end technologies like HTML, CSS, and JavaScript to powerful libraries and frameworks such as React.js and Redux, each technology represents a unique opportunity for creativity and innovation.
          </p>
          <button
            className="block mx-auto lg:mx-0 px-4 py-2 mt-4 text-white bg-black rounded-full shadow-xl text-1xl hover:bg-gray-900"
            onClick={handleClick}
          >
            Download Cover Letter
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <div className="flex flex-wrap justify-center">
            {skills.map((elem) => (
              <p
                key={elem.id}
                className="bg-gray-300 mx-1 my-2 px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-gray-400"
              >
                {elem.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyExpertise;

