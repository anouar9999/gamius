import React from 'react';
import { Clock } from 'lucide-react';
import NeonSharpEdgedProgressBar from './SharpEdgedProgressBar';

const GameEventCard = () => {
  return (
    <div className=" p-4 rounded-lg shadow-lg w-full max-w-xl">
      <div className="flex items-start space-x-4">
        <img 
         style={{
            clipPath: 'polygon(0% 0%, calc(100% - 20px) 0%, 100% 20px, 100% 100%, 20px 100%, 0% calc(100% - 20px), 0% 0%)'
          }}
              src='https://img.freepik.com/photos-premium/image-haute-resolution-trophee-decerne-aux-champions-tournoi-esports_1039156-3442.jpg?w=826'
              alt="Character portrait" 
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="text-gray-400 text-xs flex items-center mb-1">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-1 rounded-full bg-yellow-400"></div> 
            <span>STARTS IN 4 HOURS, 20:00 PM</span>
          </div>
          <h2 className="text-white text-2xl font-bold leading-tight">Super circuit level 900000</h2>
          <div className="relative w-full h-2.5 mt-4 mb-2 bg-gray-700 overflow-hidden"
             style={{
               clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)'
             }}>
          <div
            className="absolute inset-y-0 left-0 bg-[#ff4700]"
            style={{
              width: '70%',
              clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)'
            }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span className='font-semibold'>54 spots</span>
          <span className='font-semibold'>4 left</span>
        </div>
          {/* <div className="flex space-x-2 mt-3">
            <button className="bg-[#2C2C2C] text-white px-3 py-1 rounded text-xs hover:bg-[#3C3C3C] transition-colors">GAME</button>
            <button className="bg-[#2C2C2C] text-white px-3 py-1 rounded text-xs hover:bg-[#3C3C3C] transition-colors">PLAYLIST</button>
            <button className="bg-[#2C2C2C] text-white px-3 py-1 rounded text-xs hover:bg-[#3C3C3C] transition-colors">FULL PROFILE</button>
          </div> */}
          <div className=" flex  items-center mt-3 text-left text-gray-500 text-xs">

          <img 
       
              src='https://yt3.googleusercontent.com/csrkEo7TvlRc_b388HvX7Q87gaQCn-rj8SFbRF8rOFuAhuGZ0lgPYz5DA3syM7Ufn0cTpknrgA=s900-c-k-c0x00ffffff-no-rj'
              alt="Character portrait" 
          className="w-8 h-8 object-cover mx-1 rounded-lg"
        />
        Hosted by PlaytestGG
      </div>
        </div>
        
      </div>
     
    </div>
  );
};

export default GameEventCard;