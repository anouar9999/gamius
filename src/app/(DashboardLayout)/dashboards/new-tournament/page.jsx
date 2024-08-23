"use client"
import React from 'react';
import { ArrowLeft, Camera, Eye } from 'lucide-react';

const AccountSettings = () => {
  return (
    <div className="text-gray-300 min-h-screen p-4 ">
      <div className=" mx-auto">
        {/* <div className="flex justify-between items-center mb-8">
          <a href="#" className="text-orange-500 flex items-center">
            <ArrowLeft className="mr-2" size={20} />
            Go back
          </a>
        </div> */}
        
        <h1 className="text-3xl font-bold mb-2">NEW TOURNAMENT</h1>
        <p className="text-gray-500 mb-8">create a tournament and set e-mail preferences.</p>
        
        <form className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">First name</label>
          <input type="text" defaultValue="Boris" className="w-full bg-gray-800 p-3 angular-cut" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Last name</label>
          <input type="text" defaultValue="Wicked" className="w-full bg-gray-800 p-3 angular-cut" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Nickname</label>
          <input type="text" defaultValue="Wick" className="w-full bg-gray-800 p-3 angular-cut" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Location</label>
        <input type="text" defaultValue="Belgrade, Serbia" className="w-full bg-gray-800 p-3 angular-cut" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input type="email" defaultValue="boris@wicked.com" className="w-full bg-gray-800 p-3 angular-cut" />
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Old password</label>
          <div className="relative">
            <input type="password" className="w-full bg-gray-800 p-3 pr-10 angular-cut" />
            <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">New password</label>
          <input type="password" className="w-full bg-gray-800 p-3 angular-cut" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Repeat new</label>
          <input type="password" className="w-full bg-gray-800 p-3 angular-cut" />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Twitter</label>
          <input type="text" defaultValue="@Boris_Wick" className="w-full bg-gray-800 p-3 angular-cut" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Instagram</label>
          <input type="text" defaultValue="@Boris_Wick" className="w-full bg-gray-800 p-3 angular-cut" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Discord</label>
          <input type="text" defaultValue="Boris Wick#1234" className="w-full bg-gray-800 p-3 angular-cut" />
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-700 border-dashed cursor-pointer bg-gray-800 hover:bg-gray-700 angular-cut">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Camera className="w-10 h-10 mb-3 text-gray-400" />
            <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">UPLOAD PROFILE PICTURE</span></p>
            <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      
      <div className="flex justify-end">
        <button type="submit" className="px-6 py-3 bg-orange-500 text-white angular-cut-button">
          SAVE CHANGES
        </button>
      </div>

      <style jsx global>{`
        .angular-cut {
          position: relative;
          clip-path: polygon(
            0 0,
            calc(100% - 10px) 0,
            100% 10px,
            100% 100%,
            10px 100%,
            0 calc(100% - 10px)
          );
        }
        .angular-cut::before,
        .angular-cut::after {
          content: '';
          position: absolute;
          background-color: #374151; /* Tailwind's gray-700, adjust as needed */
        }
        .angular-cut::before {
          top: 0;
          right: 0;
          width: 2px;
          height: 10px;
          transform: skew(-45deg);
          transform-origin: top right;
        }
        .angular-cut::after {
          bottom: 0;
          left: 0;
          width: 10px;
          height: 2px;
          transform: skew(-45deg);
          transform-origin: bottom left;
        }
        .angular-cut-button {
          position: relative;
          clip-path: polygon(
            0 0,
            calc(100% - 10px) 0,
            100% 10px,
            100% 100%,
            10px 100%,
            0 calc(100% - 10px)
          );
        }
        .angular-cut-button::before,
        .angular-cut-button::after {
          content: '';
          position: absolute;
          background-color: #78350f; /* Tailwind's orange-900, for a darker border */
        }
        .angular-cut-button::before {
          top: 0;
          right: 0;
          width: 2px;
          height: 10px;
          transform: skew(-45deg);
          transform-origin: top right;
        }
        .angular-cut-button::after {
          bottom: 0;
          left: 0;
          width: 10px;
          height: 2px;
          transform: skew(-45deg);
          transform-origin: bottom left;
        }
      `}</style>
    </form>
      </div>
      
    </div>
  );
};

export default AccountSettings;