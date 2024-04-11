// // import React, { useState } from "react";

// // const Services = () => {
// //   const [projectData, setProjectData] = useState([
// //     {
// //       id: 1,
// //       title: "E-commerce website:",
// //       description:
// //         "I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment",
// //       actionBtn1: "View Demo",
// //       actionBtn2: "Source Code",
// //     },
// //     {
// //       id: 2,
// //       title: "Food Cart Website Using Redux Toolkit:",
// //       description:
// //         "In this project I created food-cart project with redux-toolkit and created add to cart, remove cart functionalities. Also used bootstrap for icons.",
// //       actionBtn1: "View Demo",
// //       actionBtn2: "Source Code",
// //     },
// //     {
// //       id: 3,
// //       title: "Small Challenges:",
// //       description:
// //         "I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment",
// //       actionBtn1: "View Demo",
// //       actionBtn2: "Source Code",
// //     },
// //     {
// //       id: 4,
// //       title: "E-commerce website:",
// //       description:
// //         "I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment",
// //       video: "Food_cart_video.mp4",
// //       actionBtn1: "View Demo",
// //       actionBtn2: "Source Code",
// //     },
// //   ]);

// //   const [isPlaying , setIsPlaying] = useState(false);

// //   const togglePlay = () => {
// //     setIsPlaying(!isPlaying) ;
// //   }

// //   return (
// //     <>
// //       <div className="py-16">
// //         <h1 className="text-4xl font-bold text-center underline">
// //           My Projects
// //         </h1>
// //         <div className="main-service-container mt-10 flex justify-between space-x-5 px-10 ">
// //           {/* <div className='service-1 space-y-4 shadow-lg rounded-xl bg-slate-100 p-5 text-center hover:bg-slate-200'>
// //             <h1 className='4-xl font-bold'>E-commerce website:</h1>
// //             <p>I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment</p>
// //             <button  className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl">view Details</button>
// //           </div>
// //           <div className='service-1 space-y-4 shadow-lg rounded-xl  bg-slate-100 p-5 text-center hover:bg-slate-200'>
// //             <h1 className='4-xl font-bold'>Food Cart Website Using Redux Toolkit:</h1>
// //             <p>I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment</p>
// //             <button  className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl">view Details</button>
// //           </div>
// //           <div className='service-1 space-y-4 shadow-lg rounded-xl  bg-slate-100 p-5 text-center hover:bg-slate-200'>
// //             <h1 className='4-xl font-bold'>Small Challenges:</h1>
// //             <p>I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment</p>
// //             <button  className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl">view Details</button>
// //           </div> */}
// //           {projectData.map((elem) => (
// //             <div className="service-1 space-y-4 shadow-lg rounded-xl  bg-slate-100 p-5 text-center hover:bg-slate-200">
// //               <h1 className="4-xl font-bold">{elem.title}</h1>
// //               <p>{elem.description}</p>
// //               <div className="space-x-10">
// //                 <button className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl" onClick={togglePlay}>
// //                   {isPlaying? 'pause':(elem.actionBtn1)}
// //                 </button>
// //                 {isPlaying && (
// //                   // <video className="mt-4" controls autoPlay onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)}>
// //                   //   <source id={projectData.id} src={projectData.video} type="video/mp4"/>
// //                   // </video> 
// //                 )}
// //                 <button className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl">
// //                   {elem.actionBtn2}
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Services;











// import React, { useState } from "react";

// const Services = () => {
//   const [projectData, setProjectData] = useState([
//     {
//       id: 1,
//       title: "E-commerce website:",
//       description:
//         "I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment",
//       actionBtn1: "View Demo",
//       actionBtn2: "Source Code",
//       video: "Food_cart_video.mp4",

//     },
//     {
//       id: 2,
//       title: "Food Cart Website Using Redux Toolkit:",
//       description:
//         "In this project I created food-cart project with redux-toolkit and created add to cart, remove cart functionalities. Also used bootstrap for icons.",
//       actionBtn1: "View Demo",
//       actionBtn2: "Source Code",
//       video: "Food_cart_video.mp4",
//       gitRepo: "https://github.com/Akashadhikary/food_cart",
//     },
//     {
//       id: 3,
//       title: "Small Challenges:",
//       description:
//         "I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment",
//       actionBtn1: "View Demo",
//       actionBtn2: "Source Code",
//       video: "Food_cart_video.mp4",

//     },
//   ]);

//   const [playingVideoId, setPlayingVideoId] = useState(null);

//   const togglePlay = (id) => {
//     setPlayingVideoId((prevId) => (prevId === id ? null : id));
//   };
  

//   return (
//     <>
//       <div className="py-16">
//         <h1 className="text-4xl font-bold text-center underline">
//           My Projects
//         </h1>
//         <div className="main-service-container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10">
//           {projectData.map((elem) => (
//             <div
//               key={elem.id}
//               className={`service-1 space-y-4 shadow-lg rounded-xl bg-slate-100 p-5 text-center hover:bg-slate-200 ${
//                 playingVideoId === elem.id ? 'h-auto' : 'h-full'
//               }`}
//             >
//               <h1 className="4-xl font-bold">{elem.title}</h1>
//               <p>{elem.description}</p>
//               <div className="space-x-10">
//                 <button
//                   className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl"
//                   onClick={() => togglePlay(elem.id)}
//                 >
//                   {playingVideoId === elem.id ? 'Pause' : elem.actionBtn1}
//                 </button>
//                 {playingVideoId === elem.id && elem.video && (
//                   <video
//                     className="mt-4 mx-auto"
//                     controls
//                     autoPlay
//                     onPause={() => setPlayingVideoId(null)}
//                     onEnded={() => setPlayingVideoId(null)}
//                   >
//                     <source src={elem.video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 )}
//                 <button className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl">
//                   <a href={elem.gitRepo} target="_blank" rel="noreferrer">{elem.actionBtn2}</a>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;





















// import React, { useState } from "react";

// const Services = () => {
//   const [projectData, setProjectData] = useState([
//     {
//       id: 1,
//       title: "E-commerce website:",
//       description: "In this project I created e-commese website using useContext hook for managing states.Used axios for api calls.Added filters like search filter,color filter, price filter and some other filters.In product section I made grid view and list view. In contact section I use google map.",
//       actionBtn1: "View Demo",
//       actionBtn2: "Source Code",
//       video: "ecommerse_video.mp4",
//       gitRepo: "https://github.com/Akashadhikary/ecommerse",
//     },
//     {
//       id: 2,
//       title: "Food Cart Website Using Redux Toolkit:",
//       description:
//         "In this project I created food-cart project with redux-toolkit and created add to cart, remove cart functionalities. Also used bootstrap for icons.",
//       actionBtn1: "View Demo",
//       actionBtn2: "Source Code",
//       video: "Food_cart_video.mp4",
//       gitRepo: "https://github.com/Akashadhikary/food_cart",
//     },
//     {
//       id: 3,
//       title: "Small Challenges:",
//       description:
//         "I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment",
//       actionBtn1: "View Demo",
//       actionBtn2: "Source Code",
//       video: "Food_cart_video.mp4",
//     },
//   ]);

//   const [playingVideoId, setPlayingVideoId] = useState(null);

//   const togglePlay = (id) => {
//     setPlayingVideoId((prevId) => (prevId === id ? null : id));
//   };

//   return (
//     <div className="py-16">
//       <h1 className="text-4xl font-bold text-center underline">My Projects</h1>
//       <div className="main-service-container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10">
//         {projectData.map((elem) => (
//           <div
//             key={elem.id}
//             className={`service-1 space-y-4 shadow-lg rounded-xl bg-slate-100 p-5 text-center hover:bg-slate-200 ${
//               playingVideoId === elem.id ? 'h-auto' : 'h-full'
//             }`}
//           >
//             <h1 className="4-xl font-bold">{elem.title}</h1>
//             <p>{elem.description}</p>
            // <div className="space-x-3">
            //   <button
            //     className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl"
            //     onClick={() => togglePlay(elem.id)}
            //   >
            //     {playingVideoId === elem.id ? 'Pause' : elem.actionBtn1}
            //   </button>
            //   {playingVideoId === elem.id && elem.video && (
            //     <video
            //       className="mt-4 mx-2"
            //       controls
            //       autoPlay
            //       onPause={() => setPlayingVideoId(null)}
            //       onEnded={() => setPlayingVideoId(null)}
            //     >
            //       <source src={elem.video} type="video/mp4" />
            //     </video>
            //   )}
            //   <button className="px-4 py-2 mt-4 text-white bg-black rounded-full shadow-xl text-1xl">
            //     <a href={elem.gitRepo} target="_blank" rel="noreferrer">{elem.actionBtn2}</a>
            //   </button>
            // </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;












import React, { useState } from "react";

const Services = () => {
  const [projectData, setProjectData] = useState([
    {
      id: 1,
      title: "E-commerce website:",
      description: "In this project I created e-commese website using useContext hook for managing states.Used axios for api calls.Added filters like search filter,color filter, price filter and some other filters.In product section I made grid view and list view. In contact section I use google map.",
      actionBtn1: "View Demo",
      actionBtn2: "Source Code",
      video: "ecommerse_video.mp4",
      gitRepo: "https://github.com/Akashadhikary/ecommerse",
    },
    {
      id: 2,
      title: "Food Cart Website Using Redux Toolkit:",
      description:
        "In this project I created food-cart project with redux-toolkit and created add to cart, remove cart functionalities. Also used bootstrap for icons.",
      actionBtn1: "View Demo",
      actionBtn2: "Source Code",
      video: "Food_cart_video.mp4",
      gitRepo: "https://github.com/Akashadhikary/food_cart",
    },
    {
      id: 3,
      title: "Small Challenges:",
      description:
        "I can help you create a fully functional eCommerce website with the following features: user registration, login, shopping cart, payment",
      actionBtn1: "View Demo",
      actionBtn2: "Source Code",
      video: "Food_cart_video.mp4",
    },
  ]);

  const [playingVideoId, setPlayingVideoId] = useState(null);

  const togglePlay = (id) => {
    setPlayingVideoId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold text-center underline">My Projects</h1>
      <div className="main-service-container mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-10">
        {projectData.map((elem) => (
          <div
            key={elem.id}
            className={`service-1 flex flex-col justify-between space-y-4 shadow-lg rounded-xl bg-slate-100 p-5 text-center hover:bg-slate-200`}
          >
            <div>
              <h1 className="text-2xl font-bold">{elem.title}</h1>
              <p>{elem.description}</p>
            </div>
            <div className="space-x-3">
              <button
                className="px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl"
                onClick={() => togglePlay(elem.id)}
              >
                {playingVideoId === elem.id ? 'Pause' : elem.actionBtn1}
              </button>
              {playingVideoId === elem.id && elem.video && (
                <video
                  className="mt-4 mx-2"
                  controls
                  autoPlay
                  onPause={() => setPlayingVideoId(null)}
                  onEnded={() => setPlayingVideoId(null)}
                >
                  <source src={elem.video} type="video/mp4" />
                </video>
              )}
              <button className="px-4 py-2 mt-4 text-white bg-black rounded-full shadow-xl text-1xl">
                <a href={elem.gitRepo} target="_blank" rel="noreferrer">{elem.actionBtn2}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

