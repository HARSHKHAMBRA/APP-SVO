import React, { useEffect } from 'react';

const Market = () => {
  useEffect(() => {
    // Ensure the TradingView library is loaded
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      const widget = new window.TradingView.widget({
        symbol: 'NASDAQ:AAPL', // Example symbol (you can change this)
        interval: 'D', // Example interval (D = daily)
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: 'tradingview-widget-container',
      });

      widget.init();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2>TradingView Chart Example</h2>
      <div id="tradingview-widget-container" style={{ width: '100%', height: '600px' }}></div>
    </div>
  );
};

export default Market;
