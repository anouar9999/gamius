import React from 'react';

const CustomButton = ({ title, icon, color }) => {
  return (
    <div className="relative inline-block w-full sm:w-auto">
      <svg
        className="w-full h-auto sm:w-24 md:w-28 lg:w-32"
        viewBox="0 0 100 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M6 0H87C90.5 0 93.5 1 95.5 3L100 7.5V27.5C100 30 98 32 95.5 32H13C9.5 32 6.5 31 4.5 29L0 24.5V4.5C0 2 2 0 4.5 0H6Z"
          fill={color || "#ff4700"}
        />
      </svg>
      <button className="absolute inset-0 flex items-center justify-center text-white text-xs sm:text-sm md:text-base font-semibold p-1 sm:p-2">
        {icon && (
          <span className="mr-1 sm:mr-1.5">
            {React.cloneElement(icon, { 
              size: "1em",
              className: "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
            })}
          </span>
        )}
        <span className="truncate">{title}</span>
      </button>
    </div>
  );
};

export default CustomButton;