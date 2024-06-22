import React, { useEffect, useRef } from 'react';

const Market = () => {
  const advancedChartContainer = useRef(null);
  const marketOverviewContainer = useRef(null);

  useEffect(() => {
    const advancedChartContainerRef = advancedChartContainer.current;
    const marketOverviewContainerRef = marketOverviewContainer.current;

    // Load TradingView Advanced Chart widget
    const script1 = document.createElement("script");
    script1.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script1.async = true;
    script1.innerHTML = `
      {
        "width": "100%",
        "height": "600",
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": false,
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650",
        "support_host": "https://www.tradingview.com"
      }
    `;
    
    if (advancedChartContainerRef) {
      advancedChartContainerRef.appendChild(script1);
    }

    // Load TradingView Market Overview widget
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script2.async = true;
    script2.innerHTML = `
      {
        "colorTheme": "light",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": true,
        "width": "100%",
        "height": "600",
        "plotLineColorGrowing": "rgba(0, 255, 0, 1)",
        "plotLineColorFalling": "rgba(255, 0, 0, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(19, 23, 34, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        "tabs": [
          {
            "title": "Indices",
            "symbols": [
              {
                "s": "FOREXCOM:SPXUSD",
                "d": "S&P 500 Index"
              },
              {
                "s": "FOREXCOM:NSXUSD",
                "d": "US 100 Cash CFD"
              },
              {
                "s": "FOREXCOM:DJI",
                "d": "Dow Jones Industrial Average Index"
              },
              {
                "s": "INDEX:NKY",
                "d": "Nikkei 225"
              },
              {
                "s": "INDEX:DEU40",
                "d": "DAX Index"
              },
              {
                "s": "FOREXCOM:UKXGBP",
                "d": "FTSE 100 Index"
              }
            ],
            "originalTitle": "Indices"
          },
          {
            "title": "Futures",
            "symbols": [
              {
                "s": "CME_MINI:ES1!",
                "d": "S&P 500"
              },
              {
                "s": "CME:6E1!",
                "d": "Euro"
              },
              {
                "s": "COMEX:GC1!",
                "d": "Gold"
              },
              {
                "s": "NYMEX:CL1!",
                "d": "WTI Crude Oil"
              },
              {
                "s": "NYMEX:NG1!",
                "d": "Gas"
              },
              {
                "s": "CBOT:ZC1!",
                "d": "Corn"
              }
            ],
            "originalTitle": "Futures"
          },
          {
            "title": "Bonds",
            "symbols": [
              {
                "s": "CBOT:ZB1!",
                "d": "T-Bond"
              },
              {
                "s": "CBOT:UB1!",
                "d": "Ultra T-Bond"
              },
              {
                "s": "EUREX:FGBL1!",
                "d": "Euro Bund"
              },
              {
                "s": "EUREX:FBTP1!",
                "d": "Euro BTP"
              },
              {
                "s": "EUREX:FGBM1!",
                "d": "Euro BOBL"
              }
            ],
            "originalTitle": "Bonds"
          },
          {
            "title": "Forex",
            "symbols": [
              {
                "s": "FX:EURUSD",
                "d": "EUR to USD"
              },
              {
                "s": "FX:GBPUSD",
                "d": "GBP to USD"
              },
              {
                "s": "FX:USDJPY",
                "d": "USD to JPY"
              },
              {
                "s": "FX:USDCHF",
                "d": "USD to CHF"
              },
              {
                "s": "FX:AUDUSD",
                "d": "AUD to USD"
              },
              {
                "s": "FX:USDCAD",
                "d": "USD to CAD"
              }
            ],
            "originalTitle": "Forex"
          }
        ]
      }
    `;
    
    if (marketOverviewContainerRef) {
      marketOverviewContainerRef.appendChild(script2);
    }

    return () => {
      if (advancedChartContainerRef) {
        advancedChartContainerRef.removeChild(script1);
      }
      if (marketOverviewContainerRef) {
        marketOverviewContainerRef.removeChild(script2);
      }
    };
  }, []);

  return (
    <div>
      <div className="tradingview-widget-container" ref={advancedChartContainer}></div>
      <div className="tradingview-widget-container" ref={marketOverviewContainer}></div>
    </div>
  );
};

export default Market;
