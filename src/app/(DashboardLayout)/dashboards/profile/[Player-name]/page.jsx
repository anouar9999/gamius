'use client';
import React, { useState } from 'react';
import {
  ChevronRight,
  CircleUserRound,
  Facebook,
  Gamepad2,
  Joystick,
  MapPin,
  Plus,
  PlusCircle,
  Shapes,
  Target,
  Wallet,
} from 'lucide-react';
import { Settings, Users, Calendar, FileText } from 'lucide-react';
import NeonSharpEdgedProgressBar from '@/app/(DashboardLayout)/SharpEdgedProgressBar';
import AvatarGroup from '@/app/(DashboardLayout)/AvatarGroup';
import PrizeList from '@/app/(DashboardLayout)/PrizeList';
import SquadFormatCard from '@/app/(DashboardLayout)/SquadFormatCard';
import MatchCard from '@/app/(DashboardLayout)/MatchCard';
import CustomButton from '@/app/(DashboardLayout)/CustomButton';
import { PlusOne, Thunderstorm } from '@mui/icons-material';
import { ChevronDown, ChevronUp, Clock, Trophy } from 'lucide-react';
import Image from 'next/image';
import GameCard from '@/app/(DashboardLayout)/TournamentCard';
import { Checkbox } from 'formik-mui';
import { Label } from '@headlessui/react';

const EsportsTournamentSidebar = () => {
  return (
    <div className="flex gap-6">
      {/* Left Column - Smaller Section */}
      <UserProfileSection />

      {/* Right Column - Larger Section */}
      <div className="w-2/3 space-y-6">
        <TabComponent />
      </div>
    </div>
  );
};

export default EsportsTournamentSidebar;

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Match history', 'Tournaments'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="text-white">
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-4">
                <SquadFormatCard
                  icon={<Thunderstorm />}
                  title={'6802'}
                  subTitle={'Matches played'}
                />
                <SquadFormatCard icon={<Trophy />} title={'869'} subTitle={'Tournmaent played'} />
                <SquadFormatCard
                  icon={
                    <img
                      src="/images/backgrounds/LOL_Logo_Rendered_Hi-Res_onblue-4x3-removebg-preview.png"
                      className="w-24"
                      alt="LOL Logo"
                    />
                  }
                  subTitle={'Favorite game'}
                />
              </div>
            </div>

            <h3 className="font-bold text-sm">Rules</h3>

            <div className="bg-transparent my-4 p-4 rounded-lg">
              <RocketLeagueStats />
            </div>
          </div>
        );

      case 'Match history':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <UpcomingMatchSummary />
            <MatchSummary />
            <MatchSummary />
            <MatchSummary />
            <MatchSummary />
            <MatchSummary />
            <UpcomingMatchSummary />
          </div>
        );

      default:
        return (
          <>
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
    }
  };

  return (
    <div className=" text-gray-300 ">
      <div className="flex space-x-7 pb">
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
                fill={activeTab === tab ? '#fe5821' : null}
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
      <div className="mt-4  rounded-lg">{renderTabContent()}</div>
    </div>
  );
};

const UserProfileSection = () => {
  const roundedHexagonClipPath = `
    polygon(
      50% 0%, 
      95% 25%, 95% 75%,
      50% 100%, 
      5% 75%, 5% 25%
    )
  `;

  return (
    <div className="text-white p-6 w-80">
      <div className="flex items-center mb-7">
        <div className="mr-4 relative w-16 h-16">
          <img
            src="https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671122.jpg?t=st=1724071085~exp=1724074685~hmac=2ac058c4d961e22e8abf69f7ee9f4691bbeaaa56829172bb29031db26551597e&w=740"
            alt="John Matrix"
            className="w-full h-full object-cover absolute rounded-lg"
            style={{
              clipPath: roundedHexagonClipPath,
            }}
          />
          <div
            className="absolute inset-0 border-2 border-purple-500 rounded-lg"
            style={{
              clipPath: roundedHexagonClipPath,
            }}
          ></div>
        </div>
        <div>
          <h1 className="text-2xl font-bold">JOHN MATRIX</h1>
          <div className="flex space-x-2 mt-1">
            {['facebook', 'facebook', 'youtube', 'twitch'].map((social) => (
              <div key={social} className="w-5 h-5 bg-gray-700 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

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
            fill="#fe5821"
          />
        </svg>
        <button className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
          <span className="flex items-center">
            <PlusCircle className="w-4 h-4 mr-1" />
            Add friend
          </span>
        </button>
      </div>

      <div className="my-7">
        <h3 className="text-sm font-medium mb-1">Learn more about me</h3>
        <p className="text-xs text-gray-400">
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
          velit, sed quia non numquam eius modi.
        </p>
      </div>

      <div className="flex items-center text-xs text-gray-400 mb-7">
        <div className="flex items-center mr-4 ">
          <MapPin className="w-4 h-4 mr-1 text-[#cd853f]" />
          <span className="text-white">LIMA, PERU</span>
        </div>
        <div className="flex items-center mr-4">
          <Gamepad2 className="w-4 h-4 mr-1  text-[#cd853f]" />
          <span className="text-white">3 GAMES</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1  text-[#cd853f]" />
          <span className="text-white">22/09/23</span>
        </div>
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

        .clip-polygon {
          clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
        }

        .clip-polygon2 {
          clip-path: polygon(
            30% 0%,
            70% 0%,
            100% 30%,
            100% 70%,
            70% 100%,
            30% 100%,
            0% 70%,
            0% 30%
          );
        }
      `}</style>

      <div>
        <h3 className="text-sm font-medium mb-2 ">My platform IDs</h3>
        <div className="bg-gray-800  px-3 py-2 flex items-center justify-between mb-2">
          <span className="text-gray-400 text-sm">marz76_spirit_john</span>
          <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          </div>
        </div>
        <div className="bg-orange-500  px-3 py-2 flex items-center justify-between">
          <span className="text-sm">marz76_spirit4420</span>
          <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

const MatchSummary = () => {
  return (
    <div className="bg-[#1E1F23] rounded-lg overflow-hidden max-w-md">
      {/* Match Header */}
      <div className="bg-[#2d2f35] p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-0.5 h-8 bg-orange-500 mr-2"></div>
          <div>
            <p className="text-gray-400 text-xs">PLAYED</p>
            <p className="text-white text-sm">2 HOURS AGO</p>
          </div>
        </div>
        <span className="bg-red-500 text-white text-[10px] font-semibold px-1  rounded">
          FINISHED
        </span>
      </div>

      {/* Match Body */}
      <div className="p-4 space-y-4">
        {/* Team A (Winner) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-600 rounded-full mr-3 flex items-center justify-center">
              <Image
                src="https://img.freepik.com/photos-premium/concept-unique-nouvelle-conception-du-logo_1252102-24837.jpg?w=740"
                width={40}
                height={40}
                alt="Team A Avatar"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-gray-400 text-xs">TEAM A</p>
              <p className="text-white font-semibold">FORESTYFOX</p>
            </div>
          </div>
          <div className="text-white text-xl font-bold">4</div>
        </div>
        <div className="w-full h-px bg-gray-600 mx-4"></div>

        {/* Team B (Loser - Muted) */}
        <div className="flex items-center justify-between opacity-70">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-700 rounded-full mr-3 flex items-center justify-center">
              <Image
                src="https://img.freepik.com/photos-premium/conception-du-logo-jeu-ai-generation_679376-1001.jpg?w=740"
                width={40}
                height={40}
                alt="Team B Avatar"
                className="rounded-full opacity-80"
              />
            </div>
            <div>
              <p className="text-gray-500 text-xs">TEAM B</p>
              <p className="text-gray-300 font-semibold">RABBITS RUSH</p>
            </div>
          </div>
          <div className="text-gray-300 text-xl font-bold">0</div>
        </div>
      </div>
    </div>
  );
};

const UpcomingMatchSummary = () => {
  return (
    <div className="bg-[#1E1F23] rounded-lg overflow-hidden max-w-md">
      {/* Match Header */}
      <div className="bg-[#2d2f35] p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-0.5 h-8 bg-blue-500 mr-2"></div>
          <div>
            <p className="text-gray-400 text-xs">UPCOMING</p>
            <p className="text-white text-sm">IN 2 HOURS</p>
          </div>
        </div>
        <span className="bg-blue-500 text-white text-[10px] font-semibold px-1 rounded">
          NOT STARTED
        </span>
      </div>

      {/* Match Body */}
      <div className="p-4 space-y-4">
        {/* Team A */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-600 rounded-full mr-3 flex items-center justify-center">
              <Image
                src="https://img.freepik.com/photos-premium/concept-unique-nouvelle-conception-du-logo_1252102-24837.jpg?w=740"
                width={40}
                height={40}
                alt="Team A Avatar"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-gray-400 text-xs">TEAM A</p>
              <p className="text-white font-semibold">FORESTYFOX</p>
            </div>
          </div>
          <div className="text-gray-400 text-sm font-semibold">TBD</div>
        </div>
        <div className="w-full h-px bg-gray-600 mx-4"></div>

        {/* Team B */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-700 rounded-full mr-3 flex items-center justify-center">
              <Image
                src="https://img.freepik.com/photos-premium/conception-du-logo-jeu-ai-generation_679376-1001.jpg?w=740"
                width={40}
                height={40}
                alt="Team B Avatar"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-gray-400 text-xs">TEAM B</p>
              <p className="text-white font-semibold">RABBITS RUSH</p>
            </div>
          </div>
          <div className="text-gray-400 text-sm font-semibold">TBD</div>
        </div>
      </div>
    </div>
  );
};

const RocketLeagueStats = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <Image
          src="/images/backgrounds/LOL_Logo_Rendered_Hi-Res_onblue-4x3-removebg-preview.png"
          width={80}
          height={80}
          alt="Team B Avatar"
          className="rounded-full"
        />

        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
          <div className="text-xs text-gray-400">Playing since 2015</div>
        </div>
      </div>

      <hr className='p-1 text-grey-600' />

      <div className="bg-gray-700 p-3 rounded-md">
        <div className="text-sm font-medium">Moonshine Gaming Marathon</div>
        <div className="text-xs text-gray-400">Where stars prevail</div>
      </div>
    </div>
  );
};
