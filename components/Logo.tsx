
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", variant = 'default' }) => {
  const textColor = variant === 'white' ? '#ffffff' : '#115e59'; // emerald-800
  const mountainColor = variant === 'white' ? '#ffffff' : '#15803d'; // green-700
  const houseColor = '#ef4444'; // red-500
  const riverColor = '#0ea5e9'; // sky-500

  return (
    <svg
      viewBox="0 0 320 85"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SindangBogor.com Logo"
    >
      {/* Icon Section */}
      <g>
        {/* Mountain Shape - Rounded Bell Shape */}
        <path 
          d="M5 80 C 5 30, 35 5, 50 5 C 65 5, 95 30, 95 80" 
          fill={mountainColor} 
        />
        
        {/* House/Temple */}
        {/* Roof */}
        <path 
          d="M30 50 Q 50 35 70 50" 
          stroke={variant === 'white' ? '#15803d' : '#ffffff'} 
          strokeWidth="4" 
          strokeLinecap="round"
          fill="none"
        />
        <path 
          d="M30 50 Q 50 35 70 50 L 70 50 L 30 50 Z" 
          fill={houseColor}
        />
        {/* Building Body */}
        <rect x="38" y="50" width="24" height="20" fill={houseColor} />
        {/* Door/Entrance */}
        <rect x="46" y="60" width="8" height="10" fill={variant === 'white' ? '#15803d' : '#ffffff'} fillOpacity="0.8" />
        
        {/* River/Water Flowing from bottom */}
        <path 
          d="M20 80 Q 50 65 80 80" 
          fill={riverColor}
          fillOpacity="0.8"
        />
         <path 
          d="M5 80 H 95 L 50 65 Z" 
          fill={riverColor}
          opacity="0.4"
        />
      </g>
      
      {/* Text Section */}
      <g transform="translate(105, 0)">
        <text 
          x="0" 
          y="38" 
          fontFamily="Georgia, serif" 
          fontWeight="bold" 
          fontSize="38" 
          fill={textColor}
        >
          Sindang
        </text>
        <text 
          x="0" 
          y="75" 
          fontFamily="Georgia, serif" 
          fontWeight="bold" 
          fontSize="38" 
          fill={textColor}
        >
          Bogor<tspan fontSize="18" fill={textColor} opacity="0.8">.com</tspan>
        </text>
      </g>
    </svg>
  );
};

export default Logo;
