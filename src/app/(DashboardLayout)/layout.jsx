import React from 'react';
import Image from 'next/image';
import Header from "./layout/vertical/header/Header";
import Sidebar from "./layout/vertical/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen text-white font-pilot ">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://wallpaper.forfun.com/fetch/90/90bcf5ee927d2ac4487970ebb937bef2.jpeg" // Replace with your image path
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Background"
          priority
        />
      </div>
      
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-900		 bg-opacity-95 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Header />
        <div className="flex-1 flex relative">
          <Sidebar />
          <main className="flex-1  ml-24 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;