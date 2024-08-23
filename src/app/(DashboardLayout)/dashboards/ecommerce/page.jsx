'use client';
import React, { useState } from 'react';

import { useRef } from 'react';
import { Share2, Users, Trophy, Star, Calendar, Clock, Award, Target } from 'lucide-react';
import CustomButton from '../../CustomButton';
import GameCard from '../../TournamentCard';
import TeamProfileCard from '../../TeamProfileCard';

const NavButton = ({ title, icon, isActive, onClick }) => (
  <div className="relative inline-block">
    <svg
      width="100%"
      height="32"
      viewBox="0 0 100 32"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0H80C86 0 91 2 94 5L100 11V27.5C100 30 98 32 95.5 32H20C14 32 9 30 6 27L0 21V4.5C0 2 2 0 4.5 0H12Z"
        fill={isActive ? '#fe5821' : null}
      />
    </svg>
    <button
      onClick={onClick}
      className={`absolute inset-0 flex items-center justify-center text-sm whitespace-nowrap px-4
        ${
          isActive ? 'text-white' : 'text-gray-400'
        } hover:text-white transition-colors duration-200`}
    >
      <span>{title}</span>
    </button>
  </div>
);

const StatBlock = ({ count, label }) => (
  <div className="flex items-center relative">
    <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-[#fe5821]" />
    <div className="text-start pl-4">
      <p className="text-3xl font-pilot font-bold">{count}</p>
      <div className="flex items-center font-bold justify-start text-sm text-[#fe5821]">
        {label}
      </div>
    </div>
  </div>
);

import { ChevronLeft, ChevronRight } from 'lucide-react';

const OverviewTab = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of the container width
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {' '}
      <h3 className="py-4 font-semibold  text-lg">EXPLORE ALL TOURNAMENT RELATED TO THIS GAME</h3>
      <div className="space-y-6">
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            <div className="flex space-x-4 px-4 pb-4">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="snap-start shrink-0">
                  <GameEventCard />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-opacity"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-opacity"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        {/* Rest of the OverviewTab content */}
      </div>
      <h3 className="py-4 font-semibold  text-lg">EXPLORE ALL TOURNAMENT RELATED TO THIS GAME</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
    </>
  );
};

const TournamentsTab = () => {
  const [filters, setFilters] = useState({
    upcoming: false,
    finished: false,
  });
  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };
  return (
    <>
          <h3 className="py-4 font-semibold  text-lg">EXPLORE ALL TOURNAMENT RELATED TO THIS GAME</h3>

            <div className="flex space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <checked
                  id="upcoming"
                  checked={filters.upcoming}
                  onCheckedChange={() => handleFilterChange('upcoming')}
                />
                <label htmlFor="upcoming">Upcoming</label>
              </div>
              <div className="flex items-center space-x-2">
                <checked
                  id="finished"
                  checked={filters.finished}
                  onCheckedChange={() => handleFilterChange('finished')}
                />
                <label htmlFor="finished">Finished</label>
              </div>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <GameCard
                image={
                  'https://img.freepik.com/photos-gratuite/fond-ecran-jeu-3d-abstrait-colore-noir-or-bords-nets_1409-4821.jpg?t=st=1721919045~exp=1721922645~hmac=2069894c6ea74720a51baf0b8dd995444e6634b7f410952b1be384b780d24cf3&w=826'
                }
              />
              <GameCard image={'https://storage.googleapis.com/pod_public/1300/168838.jpg'} />
              <GameCard
                image={
                  'https://img.freepik.com/premium-photo/illustration-gaming-joystick_800563-4110.jpg'
                }
              />
              <GameCard
                image={
                  'https://img.freepik.com/photos-gratuite/fond-ecran-jeu-3d-abstrait-colore-noir-or-bords-nets_1409-4821.jpg?t=st=1721919045~exp=1721922645~hmac=2069894c6ea74720a51baf0b8dd995444e6634b7f410952b1be384b780d24cf3&w=826'
                }
              />
              <GameCard image={'https://storage.googleapis.com/pod_public/1300/168838.jpg'} />
              <GameCard
                image={
                  'https://img.freepik.com/photos-gratuite/fond-ecran-jeu-3d-abstrait-colore-noir-or-bords-nets_1409-4821.jpg?t=st=1721919045~exp=1721922645~hmac=2069894c6ea74720a51baf0b8dd995444e6634b7f410952b1be384b780d24cf3&w=826'
                }
              />
              <GameCard
                image={
                  'https://img.freepik.com/photos-gratuite/fond-ecran-jeu-3d-abstrait-colore-noir-or-bords-nets_1409-4821.jpg?t=st=1721919045~exp=1721922645~hmac=2069894c6ea74720a51baf0b8dd995444e6634b7f410952b1be384b780d24cf3&w=826'
                }
              />
              <GameCard image={'https://storage.googleapis.com/pod_public/1300/168838.jpg'} />
            </div>
          </>
  );
};

import { Search } from 'lucide-react';
import MatchCard from '../../MatchCard';
import MatchCardWithScore from '../../MatchCardWithScore';
import GameEventCard from '../../GameEventCard';
import { Checkbox } from 'formik-mui';

const TeamsTab = () => (
  <>
    <div className="flex flex-col sm:flex-row justify-between items-center py-9 gap-4">
      <h3 className="font-semibold text-lg text-center sm:text-left">
        EXPLORE ALL TEAMS RELATED TO THIS GAME
      </h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search teams..."
          style={{
            clipPath:
              'polygon(0% 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, 12px 100%, 0% calc(100% - 12px), 0% 0%)',
          }}
          className="pl-10 pr-4 py-2 bg-[#313339] text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(10)].map((_, index) => (
        <TeamProfileCard key={index} />
      ))}
    </div>
  </>
);

const MatchesTab = () => (
  <>
    {' '}
    <h3 className="py-4 font-semibold  text-lg">EXPLORE ALL MATCHES RELATED TO THIS GAME</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <MatchCard />
      <MatchCard />  <MatchCardWithScore /> <MatchCard /> <MatchCardWithScore />  <MatchCard /> <MatchCardWithScore />  <MatchCard />
     
    </div>
  </>
);

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'Overview':
      return <OverviewTab />;
    case 'Tournaments':
      return <TournamentsTab />;
    case 'Teams':
      return <TeamsTab />;
    case 'Matches':
      return <MatchesTab />;
    default:
      return null;
  }
};

const LeagueOfLegendsProfile = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Tournaments', 'Matches', 'Teams'];

  return (
    <div className="text-white p-1">
      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 mb-6">
        <img
          src="https://a.allegroimg.com/s512/118ccb/cef45628426787df89d923913fd4/EA-SPORTS-FC-24-POLSKA-WERSJA-KLUCZ-EA-APP"
          alt="League of Legends character artwork"
          className="w-full md:w-44 h-auto md:h-64 rounded-xl"
          loading="lazy"
        />
        <div className="flex-grow flex flex-col justify-between">
          <div>
            {/* <div className="flex justify-between items-start mb-4">
              <CustomButton title={'Share'} icon={<Share2 className='w-3.5 h-3.5 mr-1.5' strokeWidth={2.5}/> } color={'bg-gray-400'}  />
            </div> */}
            <h1 className="text-3xl font-black mb-2">League of Legends</h1>
            <p className="text-gray-400 text-sm mb-4">
              <span className="text-[#ff4700]">26,350</span> Active players are gaming
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['PC', 'Mobile', 'Console', 'VR', 'Xbox'].map((platform) => (
                <span key={platform} className="bg-gray-800 text-xs px-4 py-1 rounded-full">
                  {platform}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <div className="flex space-x-4 overflow-x-auto">
              {tabs.map((tab) => (
                <div key={tab} className="flex-shrink-0" style={{ minWidth: '100px' }}>
                  <NavButton
                    title={tab}
                    isActive={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <StatBlock count="3200" label={<>Matches played</>} />
          <StatBlock count="8629" label={<>Tournaments played</>} />
        </div>
      </div>

      <div className="mt-6 p-2 rounded-lg">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default LeagueOfLegendsProfile;
