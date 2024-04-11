// import React, { useState } from 'react'
// import { generateEmail } from './EmailMe'
// import { NavLink } from 'react-router-dom'

// const Header = () => {

//   const [myMane , setMyName] = useState("Akash Adhikary")
//   const [menuLink , setMenuLink] = useState([
//     {
//         id: 1,
//         title: "Home",
//         link: "/"
//     },
//     {
//         id: 2,
//         title: "About Me",
//         link: "/read-more"
//     },
//     {
//         id: 3,
//         title: "Contact",
//         link: "/contact"
//     },
//   ])



//   const handleClick = () => {
//     generateEmail({emailSubject : "Impressed with your Portfolio" , emailBody: "Hello Akash,"})
//   }
  

//   return (
//     <>
//     <div className='h-20 border main items-center flex justify-between px-10 bg-gray-300 p-4 fixed w-full top-0'>
//       <div className='font-bold text-2xl'>{myMane}</div>
//       <div className='space-x-5'>
//         {menuLink.map((link) => (
//           //<a key={link.id} href={link.link} className='hover:text-red-700'>{link.title}</a>
//           <NavLink to={link.link}>{link.title}</NavLink>
//         ))}
//       </div>
//       <div>
//         <button className='px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl hover:bg-gray-800' onClick={handleClick}>Email Me</button>
//       </div>
//     </div>
//   </>
//   )
// }

// export default Header






import React, { useState } from 'react';
import { generateEmail } from './EmailMe';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [myName, setMyName] = useState("Akash Adhikary");
  const [menuLink, setMenuLink] = useState([
    {
      id: 1,
      title: "Home",
      link: "/"
    },
    {
      id: 2,
      title: "About Me",
      link: "/read-more"
    },
    {
      id: 3,
      title: "Contact",
      link: "/contact"
    },
  ]);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    generateEmail({ emailSubject: "Impressed with your Portfolio", emailBody: "Hello Akash," });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className='h-20 border main items-center flex justify-between px-10 bg-gray-300 p-4 fixed w-full top-0'>
        <div className='font-bold text-2xl'>{myName}</div>
        <div className='space-x-5 hidden lg:flex'>
          {menuLink.map((link) => (
            <NavLink key={link.id} to={link.link} className='hover:text-red-700'>{link.title}</NavLink>
          ))}
        </div>
        <div className='lg:hidden'>
          <button className='px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl hover:bg-gray-800' onClick={toggleMenu}>Menu</button>
        </div>
        {showMenu && (
          <div className='lg:hidden absolute top-20 right-10 bg-gray-300 p-4 rounded-md'>
            {menuLink.map((link) => (
              <NavLink key={link.id} to={link.link} className='block py-2 hover:text-red-700'>{link.title}</NavLink>
            ))}
          </div>
        )}
        <div>
          <button className='px-4 py-2 text-white bg-black rounded-full shadow-xl text-1xl hover:bg-gray-800' onClick={handleClick}>Email Me</button>
        </div>
      </div>
    </>
  );
};

export default Header;
