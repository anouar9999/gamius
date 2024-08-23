"use client"
import React from 'react';
import { Menu, Triangle, Clock, Shield } from 'lucide-react';
import SidebarItems from './SidebarItems';

const Sidebar = () => {
  return (
    <aside className="fixed left-5 top-15 w-[160] bg-transparent	 flex flex-col items-center py-4 rounded-xl h-[calc(100vh-120px)]">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <SidebarItems />
      </div>
    </aside>
  );
};

export default Sidebar;