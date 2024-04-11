// import React from 'react'

// const Footer = () => {

//   const currentYear = new Date().getFullYear()

//   return (
//     <>
//     <div className='py-5 border bg-gray-100 flex justify-between px-72'>
//       <div className='items-center'>
//         <p>@{currentYear} Akash Adhikary</p>
//       </div>
//       <div className='space-x-5 flex justify-between items-center'>
//         <a className='hh hover:underline' href="https://github.com/akashadhikary" target="_blank">GitHub</a>
//         {' |'}
//         <a className='hh hover:underline' href="/">Home</a>
//         {' |'}
//         <a className='hh hover:underline' href='/contact'>Contact</a>
//       </div>
//       </div>
//     </>
//   )
// }

// export default Footer


import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='py-5 px-16 bg-gray-100 flex flex-col lg:flex-row justify-between items-center'>
      <div className='w-full lg:w-2/3 mx-auto lg:mx-10 text-center lg:text-left'>
        <p>@{currentYear} Akash Adhikary</p>
      </div>
      <div className='w-full lg:w-1/3 flex justify-center mt-5 lg:mt-0'>
        <div className='space-x-4'>
          <a className='hh hover:underline' href="https://github.com/akashadhikary" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className='hidden md:inline'>{' | '}</span>
          <a className='hh hover:underline' href="/">Home</a>
          <span className='hidden md:inline'>{' | '}</span>
          <a className='hh hover:underline' href='/contact'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;


