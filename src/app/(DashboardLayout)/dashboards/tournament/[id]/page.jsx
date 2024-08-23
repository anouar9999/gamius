"use client"
import React, { useState } from 'react';
import { ChevronRight, CircleUserRound, Gamepad2, Joystick, Plus, Shapes, Wallet } from 'lucide-react';
import { Settings, Users, Calendar, FileText } from 'lucide-react';
import NeonSharpEdgedProgressBar from '@/app/(DashboardLayout)/SharpEdgedProgressBar';
import AvatarGroup from '@/app/(DashboardLayout)/AvatarGroup';
import PrizeList from '@/app/(DashboardLayout)/PrizeList';
import SquadFormatCard from '@/app/(DashboardLayout)/SquadFormatCard';
import MatchCard from '@/app/(DashboardLayout)/MatchCard';

const EsportsTournamentSidebar = () => {
  return (
    <div className="flex gap-6">
      {/* Left Column - Smaller Section */}
      <div className="w-1/4 text-white space-y-6">
        <div className="space-y-2">
          <img
            src="/images/backgrounds/logos-championships-tournaments-competitions-leagues-sports-logos_331749-386-removebg-preview.png"
            alt="ESPORTS PRIME"
            className="w-44"
          />
          <h2 className="text-3xl font-bold">Marathon Legends Premium members</h2>
          <NeonSharpEdgedProgressBar progress={45}/>
          <p className="text-sm text-gray-400">Started in 44:39</p>
        </div>

        <div className="flex items-center gap-2">
        <div className="relative inline-block">
      <svg
        width="100"
        height="32"
        viewBox="0 0 100 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0H87C90.5 0 93.5 1 95.5 3L100 7.5V27.5C100 30 98 32 95.5 32H13C9.5 32 6.5 31 4.5 29L0 24.5V4.5C0 2 2 0 4.5 0H6Z"
          fill="#ff4700"
        />
      </svg>
      <button className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold">
        <Plus className="w-3.5 h-3.5 mr-1.5" strokeWidth={2.5} />
        <span className="">Join Now</span>
      </button>
    </div>
    <AvatarGroup/>
          
        </div>

        <div className="space-y-2">
          <h3 className="font-bold text-sm">About the tournament</h3>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut odio id obcaecati
            necessitatibus! Quis officia architecto, illum sunt, magni quae est aliquam voluptatibus
            reiciendis sint vitae dignissimos debitis eos accusantium.{' '}
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            'Game',
            'Fortnite',
            'Paid',
            'play',
            'ESPORTS',
            'WEB3',
        
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 uppercase    rounded p-2 text-center text-xs">
             <span className='text-gray-400 font-semibold'>{item}</span> 
            </div>
          ))}
        </div>
        <PrizeList/>

      </div>

      {/* Right Column - Larger Section */}
      <div className="w-2/3 space-y-6">
       <TabComponent/>
      </div>

    
    </div>
  );
};

export default EsportsTournamentSidebar;




const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Match Finder', 'Standings', 'Matches'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="text-white">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
             <SquadFormatCard  icon={<Gamepad2 />} title={'SQUAD'} subTitle={'Format of game'}/>
             <SquadFormatCard icon={<Shapes />}  title={'PLAYSTATION'} subTitle={'Platform Played'}/>
             <SquadFormatCard icon={<CircleUserRound />}  title={'12'} subTitle={'Number of Players'}/>
             <SquadFormatCard icon={<img src='/images/backgrounds/LOL_Logo_Rendered_Hi-Res_onblue-4x3-removebg-preview.png' className={"w-24"}/>}   subTitle={'Platform Played'}/>

              </  div>
           
            </div>


            <h3 className="font-bold text-sm">Rules</h3>
 
            <div className="bg-transparent my-4  p-4 rounded-lg">
        <p className="text-white  leading-relaxed text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quibusdam, numquam similique dolor magni blanditiis vero excepturi sapiente, eius iure dicta, ea nesciunt soluta dolorem aliquid in tempore corporis explicabo.
        </p> <br /><p className="text-white leading-relaxed text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quibusdam, numquam similique dolor magni blanditiis vero excepturi sapiente, eius iure dicta, ea nesciunt soluta dolorem aliquid in tempore corporis explicabo.
        </p>
        <br /><p className="text-white leading-relaxed text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quibusdam, numquam similique dolor magni blanditiis vero excepturi sapiente, eius iure dicta, ea nesciunt soluta dolorem aliquid in tempore corporis explicabo.
        </p>
        <br />
      
        <br /><p className="text-white leading-relaxed text-sm"><li>          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quibusdam, numquam similique dolor magni blanditiis vero excepturi sapiente, eius iure dicta, ea nesciunt soluta dolorem aliquid in tempore corporis explicabo.
        </li>
        </p>
        <br /><p className="text-white leading-relaxed text-sm"><li>          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quibusdam, numquam similique dolor magni blanditiis vero excepturi sapiente, eius iure dicta, ea nesciunt soluta dolorem aliquid in tempore corporis explicabo.
        </li>
        </p>
        <p className="text-white leading-relaxed text-sm"><li>          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quibusdam, numquam similique dolor magni blanditiis vero excepturi sapiente, eius iure dicta, ea nesciunt soluta dolorem aliquid in tempore corporis explicabo.
        </li>
        </p>
        <p className="text-white leading-relaxed text-sm"><li>          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quibusdam, numquam similique dolor magni blanditiis vero excepturi sapiente, eius iure dicta, ea nesciunt soluta dolorem aliquid in tempore corporis explicabo.
        </li>
        </p>
      </div>          </div>
        );
      // Add cases for other tabs here
      case 'Matches':
        return (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>
            <MatchCard/>

          </div>
        );
      default:
        return <p>Content for {activeTab}</p>;
    }
  };

  return (
    <div className=" text-gray-300 p-4">
      <div className="flex space-x-7">
        {tabs.map((tab) => (
          <div key={tab} className="relative inline-block">
            <svg
              width="100"
              height="27"
              viewBox="0 0 100 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0H87C90.5 0 93.5 1 95.5 3L100 7.5V27.5C100 30 98 32 95.5 32H13C9.5 32 6.5 31 4.5 29L0 24.5V4.5C0 2 2 0 4.5 0H6Z"
                fill={activeTab === tab ? "#fe5821" : null}
              />
            </svg>
            <button
              onClick={() => setActiveTab(tab)}
              className={`absolute inset-0  flex items-center justify-center text-xs font-semibold 
                ${activeTab === tab ? 'text-white' : 'text-gray-400'}`}
            >
              <span>{tab}</span>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 p-6 rounded-lg">
        {renderTabContent()}
      </div>
    </div>
  );
};








