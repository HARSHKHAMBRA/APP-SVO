import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const Market = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('NASDAQ:AAPL'); // Default symbol

  useEffect(() => {
    loadTradingViewWidget(selectedSymbol); // Load initial TradingView widget
  }, [selectedSymbol]);

  const loadTradingViewWidget = (symbol) => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      const widget = new window.TradingView.widget({
        symbol: symbol,
        interval: 'D',
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
  };

  // Example list of markets (replace with actual data)
  const markets = [
    { id: 1, name: 'NASDAQ', symbol: 'NASDAQ:AAPL', description: 'Apple Inc.' },
    { id: 2, name: 'NYSE', symbol: 'NYSE:MSFT', description: 'Microsoft Corporation' },
    { id: 3, name: 'Tokyo Stock Exchange', symbol: 'TSE:7203', description: 'Toyota Motor Corporation' },
    { id: 4, name: 'London Stock Exchange', symbol: 'LSE:BP', description: 'BP plc' },
    { id: 5, name: 'Hong Kong Stock Exchange', symbol: 'HKEX:0700', description: 'Tencent Holdings Limited' },
    { id: 6, name: 'Frankfurt Stock Exchange', symbol: 'FRA:SAP', description: 'SAP SE' },
    { id: 7, name: 'Shanghai Stock Exchange', symbol: 'SSE:600519', description: 'Kweichow Moutai Co., Ltd.' },
    { id: 8, name: 'Bombay Stock Exchange', symbol: 'BSE:500325', description: 'Reliance Industries Limited' },
  ];

  const handleMarketClick = (symbol) => {
    setSelectedSymbol(symbol); // Update selected symbol on click
  };

  return (
    <Container fluid className="market-container">
      <h2 className="text-center mb-4">SVO MARKET</h2>
      <Row>
        <Col xs={12} md={8} className="mb-4">
          <div id="tradingview-widget-container" className="tradingview-container"></div>
        </Col>
        <Col xs={12} md={4}>
          <div className="markets-list">
            <h3 className="mb-3">Markets</h3>
            <ListGroup className="list-group">
              {markets.map((market) => (
                <ListGroup.Item
                  key={market.id}
                  action
                  onClick={() => handleMarketClick(market.symbol)}
                  active={selectedSymbol === market.symbol}
                >
                  <strong>{market.name}</strong> ({market.symbol}) - {market.description}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>

      {/* Optional: Add custom CSS for responsive design */}
      <style jsx>{`
        .market-container {
          padding: 15px; /* Adjust padding for all sides */
        }

        .tradingview-container {
          width: 100%;
          height: 300px; /* Adjust height for mobile */
        }

        .markets-list {
          margin-top: 20px;
        }

        .list-group {
          max-height: 300px; /* Limit height to enable scrolling */
          overflow-y: auto; /* Enable vertical scrolling */
        }

        @media (min-width: 768px) {
          .tradingview-container {
            height: 500px; /* Larger height for larger screens */
          }
        }
      `}</style>
    </Container>
  );
};

export default Market;
