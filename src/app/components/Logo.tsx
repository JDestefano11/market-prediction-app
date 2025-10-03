// src/components/Logo.tsx
import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({ 
  size = "md", 
  showText = true,
  className = "" 
}: LogoProps) {
  // Size mapping
  const sizeMap = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" }
  };

  const iconSize = sizeMap[size].icon;
  const textSize = sizeMap[size].text;

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon */}
      <div 
        className="relative"
        style={{ 
          width: iconSize, 
          height: iconSize 
        }}
      >
        {/* Background Circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
        
        {/* Chart Line */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M3 12L7.5 7.5L12.5 12.5L16.5 8.5L21 13" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Arrow */}
          <path 
            d="M16 8H21V13" 
            stroke="white" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="ml-2 flex items-center">
          <span className={`font-headers font-bold ${textSize} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600`}>
            Trade<span className="text-white">Fusion</span>
          </span>
        </div>
      )}
    </div>
  );
}