// import React from "react";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// const BuilderLayout = ({ children }) => {
//   return (
//     <div className="h-screen flex flex-col">
//       <Navbar />
//       <div className="flex flex-1">
//         <Sidebar />
//         <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default BuilderLayout;

// import React from 'react'
// import Navbar from './Navbar'
// import Sidebar from './Sidebar'
// const BuilderLayout = ({children}) => {
//   return (
//     <div className='h-screen flex flex-col'> 
//         <Navbar/>
//         <div className='flex flex-1 '>
// <Sidebar/>
// <main className='flex-1 p-4 bg-gray-100 overflow-y-auto '>
//     {children}
// </main>
//         </div>
//     </div>
//   )
// }

// export default BuilderLayout


// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';

// const BuilderLayout = ({ children }) => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768); // ✅ Mobile mode if width is < 768px
//     };

//     window.addEventListener("resize", checkScreenSize);
//     checkScreenSize();

//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   return (
//     <div className='h-screen flex flex-col'> 
//       <Navbar/>
//       <div className='flex flex-1 '>
//         {/* ✅ Hide Sidebar on Small Screens */}
//         {!isMobile && <Sidebar/>}

//         {/* ✅ Expand Main Content When Sidebar is Hidden */}
//         <main className={`flex-1 p-4 bg-gray-100 overflow-y-auto ${isMobile ? 'w-full' : ''}`}>
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default BuilderLayout;



import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const BuilderLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // ✅ Mobile mode if width is < 768px
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      {/* ✅ Layout for Mobile vs Desktop */}
      {isMobile ? (
        <>
          <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">{children}</main>
          <Sidebar /> {/* ✅ Move Sidebar BELOW Main Content on Mobile */}
        </>
      ) : (
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">{children}</main>
        </div>
      )}
    </div>
  );
};

export default BuilderLayout;