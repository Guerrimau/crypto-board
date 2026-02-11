# Crypto Board

Real-time cryptocurrency dashboard displaying live prices, historical charts, and exchange rate calculator for Bitcoin and Ethereum. Built with React to explore real-time data fetching, caching strategies, and state management with TanStack Query.

## 🚀 Features

- **Live Price Tracking** - Real-time BTC and ETH prices in USD and EUR
- **Interactive Price Chart** - Historical price visualization with time-series data
- **Exchange Calculator** - Convert between crypto and fiat currencies
- **Multi-Currency Support** - Displays prices in USD, EUR, and BTC equivalent
- **Historical Data Table** - Recent price updates with timestamps

## 🛠️ Built With

- **React** - UI framework
- **TanStack Query (React Query)** - Server state management and caching
- **MUI Joy** - Component library and design system
- **React Charts** - Price visualization
- **CryptoCompare API** - Real-time cryptocurrency data
- **Create React App** - Build tooling
- **Vercel** - Deployment

## 📊 What It Does

Fetches and displays:
- Current BTC/ETH exchange rates via CryptoCompare API
- 24-hour price charts with real-time updates
- Historical price data with automatic refresh
- Bi-directional currency conversion calculator

Live demo: https://crypto-board-blond.vercel.app/

## 💡 Technical Highlights

- **TanStack Query** for intelligent data fetching, caching, and background updates
- Automatic cache invalidation and refetching strategies
- Optimistic UI updates for calculator
- Server state management without Redux
- MUI Joy's dark theme with custom styling
- React Charts for performant time-series visualization

## 🎯 Why TanStack Query?

This project explores modern server state management patterns:
- Automatic background refetching
- Cache management and stale-while-revalidate strategies
- Deduplication of concurrent requests
- Loading and error states handling
- No manual Redux/Context boilerplate needed

---

*Built to master TanStack Query and real-time data synchronization patterns.*
