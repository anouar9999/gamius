"use client"
import React from 'react';
import { Bell, Wallet, ChevronDown, Box, CirclePlus } from 'lucide-react';
import Profile from './Profile';
import { Stack } from '@mui/material';
import Language from './Language';
import Navigation from '../../horizontal/navbar/Navigation';
import Search from './Search';
import Notifications from './Notification';
import MobileRightSidebar from './MobileRightSidebar';
import '@/app/font.css'
import Link from 'next/link';
const Header = () => {
  return (
    <header className="w-full h-24 bg-transparent	 flex items-center p-3 justify-between px-12">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-custom ">GAMIUS</h1>
      </div>
      <div className="flex items-center space-x-6">
     < CustomButton title={"New Tournament"}  />
     <Search />

        {/* <Box flexGrow={1} /> */}
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Language /> */}

          {/* ------------------------------------------- */}
          {/* End Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          {/* <Notifications /> */}
          {/* ------------------------------------------- */}
          {/* Toggle Right Sidebar for mobile */}
          {/* ------------------------------------------- */}
     
          <Profile />
   
</Stack>
      </div>
    </header>
  );
};

export default Header;

const CustomButton = ({ title, icon: Icon }) => {
  return (
    <Link href={'/dashboards/new-tournament'} >
    <div className="relative inline-block">
      <svg
        width="160"
        height="40"
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.6 0H139.2C144.8 0 149.6 1.25 152.8 3.75L160 9.375V34.375C160 37.5 156.8 40 152.8 40H20.8C15.2 40 10.4 38.75 7.2 36.25L0 30.625V5.625C0 2.5 3.2 0 7.2 0H9.6Z"
          fill="#ff4700"
        />
      </svg>
      <button className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
      <CirclePlus className="w-4 h-4 mr-2" strokeWidth={2.5} />
        <span>{title}</span>
      </button>
    </div>
    </Link>
  );
};

