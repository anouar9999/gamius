"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Trophy } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';




const PlayerEntry = ({ name, avatar, status }) => (
  <motion.div 
    className="flex items-center justify-center space-x-2 bg-gray-800 bg-opacity-50 p-2 rounded-lg angular-cut max-w-[300px] mx-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="w-8 h-8 overflow-hidden flex-shrink-0">
      <img src={avatar} alt={name} className="w-full h-full object-cover clip-polygon2" />
    </div>
    <div className="flex-grow min-w-0">
      <p className="text-white font-semibold text-sm truncate">{name}</p>
      <p className={`text-[10px] truncate ${
        status === 'Ready' ? 'text-green-400' :
        status === 'In Game' ? 'text-blue-400' :
        status === 'Away' ? 'text-yellow-400' :
        'text-gray-400'
      }`}>{status}</p>
    </div>
  </motion.div>
);



const ScoreInputDialog = ({ isOpen, closeDialog, onSave, teamA, teamB }) => {
  const [scoreA, setScoreA] = useState('');
  const [scoreB, setScoreB] = useState('');
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const numScoreA = parseInt(scoreA) || 0;
    const numScoreB = parseInt(scoreB) || 0;
    if (numScoreA > numScoreB) setWinner('A');
    else if (numScoreB > numScoreA) setWinner('B');
    else setWinner(null);
  }, [scoreA, scoreB]);

  const handleScoreChange = (team, value) => {
    if (value === '' || /^\d+$/.test(value)) {
      team === 'A' ? setScoreA(value) : setScoreB(value);
    }
  };

  const handleSave = () => {
    onSave(parseInt(scoreA) || 0, parseInt(scoreB) || 0);
    closeDialog();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={closeDialog} className="relative z-50">
          <motion.div 
            className="fixed inset-0 bg-black/50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel 
              as={motion.div}
              className="mx-auto max-w-2xl w-full rounded-3xl bg-gray-800 p-8 shadow-xl angular-cut"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Dialog.Title className="text-2xl font-bold text-white mb-6 text-center">Enter Match Score</Dialog.Title>
              <div className="flex justify-between items-center space-x-4">
                {[{ team: 'A', data: teamA, score: scoreA }, { team: 'B', data: teamB, score: scoreB }].map(({ team, data, score }, index) => (
                  <React.Fragment key={team}>
                    <motion.div 
                      className={`flex-1 text-center ${winner === team ? 'scale-105 transition-transform duration-300' : ''}`}
                      animate={winner === team ? { scale: 1.05 } : { scale: 1 }}
                    >
                      <div className="relative inline-block">
                        <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center angular-cut">
                          <img src={data.logo} alt={data.name} className="w-20 h-20 object-contain" />
                        </div>
                        <AnimatePresence>
                          {winner === team && (
                            <motion.div 
                              className="absolute -top-2 -right-2 bg-yellow-500 rounded-full p-1"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            >
                              <Trophy size={18} className="text-gray-800" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <p className="text-sm text-gray-400 mt-2">TEAM {team}</p>
                      <p className="font-semibold text-white">{data.name}</p>
                    </motion.div>
                    {index === 0 && (
                      <div className="flex items-center space-x-4">
                        <input
                          type="text"
                          value={scoreA}
                          onChange={(e) => handleScoreChange('A', e.target.value)}
                          className="w-16 h-12 rounded bg-gray-700 border border-gray-600 text-white text-center text-2xl font-bold angular-cut"
                          placeholder="0"
                        />
                        <div className="text-white text-3xl font-bold mx-2">:</div>
                        <input
                          type="text"
                          value={scoreB}
                          onChange={(e) => handleScoreChange('B', e.target.value)}
                          className="w-16 h-12 rounded bg-gray-700 border border-gray-600 text-white text-center text-2xl font-bold angular-cut"
                          placeholder="0"
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <motion.button
                  onClick={handleSave}
                  className="px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300 angular-cut-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Save Final Score
                </motion.button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

const LeagueLobbyInterface = () => {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [scores, setScores] = useState({ teamA: 0, teamB: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSaveScores = (scoreA, scoreB) => {
    setScores({ teamA: scoreA, teamB: scoreB });
    console.log("Scores saved:", { FORESTYFOX: scoreA, RABBITS_RUSH: scoreB });
  };

  const teamA = {
    name: 'FORESTYFOX',
    logo: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp',
    players: [
      { name: 'MAYHOOO', avatar: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp', status: 'Ready' },
      { name: 'BOOST_DM801', avatar: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp', status: 'In Game' },
      { name: 'HEAX', avatar: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp', status: 'Away' },
      { name: 'JUSTINE', avatar: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp', status: 'Ready' },
    ]
  };

  const teamB = {
    name: 'RABBITS RUSH',
    logo: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp',
    players: [
      { name: 'ZADIA', avatar: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp', status: 'Ready' },
      { name: 'PIQUIE', avatar: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp', status: 'Ready' },
      { name: 'HEYHOOOOOOOO', avatar: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp', status: 'In Game' },
      { name: 'GOVAAAA', avatar: 'https://www.thedivinetech.com/uploads/v2/gaming-avatar/portfolio/1000/gaming-avatar-designs(12).webp', status: 'Away' },
    ]
  };

  return (
    <div className="min-h-screen text-white">
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
          clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);}


        .clip-polygon2 {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);}      `}</style>
      <div className="mx-auto">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <img src="/images/backgrounds/LOL_Logo_Rendered_Hi-Res_onblue-4x3-removebg-preview.png" alt="" srcset="" className='w-24  m-auto' />

          <h2 className="text-xl mb-1">Long night run all day</h2>
          <p className="text-gray-400">Should be finished in 2 days from now</p>
        </motion.div>

        <motion.div 
          className="flex justify-center items-center space-x-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center flex items-center space-x-4">
            <div>
              <p className="font-semibold text-sm text-gray-400 text-right">TEAM A</p>
              <p className="font-semibold text-lg text-right">{teamA.name}</p>
            </div>
            <motion.div 
              className="w-20 h-20  rounded-lg flex items-center justify-center angular-cut"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={teamA.logo} alt={teamA.name} className="w-16 h-16 object-contain clip-polygon2 " />
            </motion.div>
           <motion.span 
             className="font-semibold text-2xl text-left"
             key={scores.teamA}
             initial={{ scale: 1.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ type: "spring", stiffness: 300, damping: 10 }}
           >
             {scores.teamA}
           </motion.span> 
          </div>
          <div className="w-20 h-20 flex items-center justify-center">
            <motion.button 
              onClick={() => setIsDialogOpen(true)}  
              className="text-white font-bold text-2xl hover:text-orange-400"
              whileHover={{ scale: 1.2, }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              VS
            </motion.button>
          </div>
          <div className="text-center flex items-center space-x-4">
            <motion.span 
              className="font-semibold text-2xl text-left"
              key={scores.teamB}
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              {scores.teamB}
            </motion.span>  
            <motion.div 
              className="w-16 h-16  rounded-lg flex items-center justify-center angular-cut"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={teamB.logo} alt={teamB.name} className="w-16 h-16 object-contain clip-polygon2 " />
            </motion.div>
            <div>
              <p className="font-semibold text-sm text-gray-400 text-left">TEAM B</p>
              <p className="font-semibold text-lg text-left">{teamB.name}</p>
            </div>
          </div>
          </motion.div>

        <div className="flex justify-around items-center">
          <motion.div 
            className="w-1/3 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {teamA.players.map((player, index) => (
              <PlayerEntry key={index} {...player} />
            ))}
          </motion.div>
          
          {/* <motion.div 
            className="w-1/4 flex flex-col items-center justify-center space-y-2 m-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.p 
              className="text-red-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Time left to connect: {formatTime(timeLeft)}
            </motion.p>
          </motion.div> */}
          
          <motion.div 
            className="w-1/3 space-y-4 items-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {teamB.players.map((player, index) => (
              <PlayerEntry key={index} {...player} />
            ))}
          </motion.div>
        </div>
      </div>

      <ScoreInputDialog
        isOpen={isDialogOpen}
        closeDialog={() => setIsDialogOpen(false)}
        onSave={handleSaveScores}
        teamA={teamA}
        teamB={teamB}
      />
    </div>
  );
};

export default LeagueLobbyInterface;