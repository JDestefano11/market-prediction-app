'use client';

import React, { useEffect, useRef } from 'react';

export default function ModifiedTickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Create the widget container
    const widgetContainer = document.createElement('div');
    widgetContainer.className = 'tradingview-widget-container';
    widgetContainer.style.width = '100%';
    widgetContainer.style.height = '46px';
    
    // Create the widget div
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'tradingview-widget-container__widget';
    widgetDiv.style.width = '100%';
    widgetDiv.style.height = '100%';
    widgetContainer.appendChild(widgetDiv);
    
    // Add container to the DOM first
    containerRef.current.appendChild(widgetContainer);
    
    // Create the script with widget configuration
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    
    // Configure the widget for perfect fit
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500" },
        { "proName": "NASDAQ:TSLA", "title": "Tesla" },
        { "proName": "NASDAQ:AAPL", "title": "Apple" },
        { "proName": "BINANCE:BTCUSDT", "title": "Bitcoin" },
        { "proName": "BINANCE:ETHUSDT", "title": "Ethereum" },
        { "proName": "NASDAQ:MSFT", "title": "Microsoft" }
      ],
      "colorTheme": "dark",
      "isTransparent": true,
      "displayMode": "adaptive",
      "locale": "en",
      "showSymbolLogo": true,
      "height": 46,
      "width": "100%"
    });
    
    // Add the script to the widget container
    widgetContainer.appendChild(script);
    
    // Style the background container for perfect fit
    if (containerRef.current) {
      containerRef.current.style.backgroundColor = '#172A46'; // secondary-blue
      containerRef.current.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
      containerRef.current.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      containerRef.current.style.overflow = 'hidden';
      containerRef.current.style.height = '46px';
      containerRef.current.style.width = '100%';
      containerRef.current.style.margin = '0';
      containerRef.current.style.padding = '0';
      containerRef.current.style.display = 'flex';
      containerRef.current.style.alignItems = 'center';
      containerRef.current.style.justifyContent = 'center';
    }
    
    // Create and insert CSS to ensure perfect fit
    const style = document.createElement('style');
    style.textContent = `
      .tradingview-widget-container iframe {
        height: 46px !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      style.remove();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full"
      style={{
        position: 'relative',
        height: '46px'
      }}
    >
      <div className="flex items-center justify-center h-full w-full absolute top-0 left-0">
        <p className="text-white text-sm">Loading market data...</p>
      </div>
    </div>
  );
}
