# TradeMentor

TradeMentor is a Next.js-based platform designed for traders to learn and apply candlestick chart analysis and technical indicators. The project combines the best features from TradingView, TrendSpider, and MetaTrader 5, focusing on customized education and practical trading skills.

## Features

- **Interactive Candlestick Charts**: Visualize price movements with VWAP, moving averages, and volume indicators using lightweight-charts
- **Pattern Recognition**: Automatically detect important candlestick patterns like hammer, shooting star, and doji
- **Educational Modules**: Step-by-step training modules based on proven trading strategies
- **Responsive Design**: Fully responsive UI built with Tailwind CSS that works across all devices

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tradementor.git
   cd tradementor
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tradementor/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── charts/       # Charts page
│   │   ├── training/     # Training modules page
│   │   ├── page.tsx      # Homepage
│   │   └── layout.tsx    # Root layout
│   ├── components/       # React components
│   │   ├── ChartComponent.tsx    # Candlestick chart component
│   │   ├── PatternIndicator.tsx  # Pattern detection component
│   │   ├── TrainingModule.tsx    # Educational module component
│   │   └── Navbar.tsx            # Navigation bar
│   ├── lib/              # Utility functions and API calls
│   └── types/            # TypeScript definitions
├── public/               # Static assets
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Key Components

### Charts

The charts page allows users to:
- View candlestick charts for various stocks and timeframes
- Toggle VWAP and moving average indicators
- See detected patterns with confidence levels
- View stock information and price changes

### Training Modules

The training section includes:
1. **Introduction to Candlestick Patterns**: Learn the basics of candlestick anatomy and common patterns
2. **Using VWAP**: Understand how to use Volume Weighted Average Price for trend identification
3. **Confirming Signals**: Combine multiple indicators for higher probability trades

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For styling and responsive design
- **Lightweight Charts**: TradingView's open-source library for rendering financial charts
- **React Hooks**: For state management

## Customization

### Adding New Stocks

Modify the `stockOptions` array in `src/app/charts/page.tsx` to add more stocks:

```typescript
const stockOptions = [
  { symbol: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'MSFT', name: 'Microsoft Corp.' },
  // Add new stocks here
];
```

### Adding New Training Modules

Edit the `trainingModules` array in `src/app/training/page.tsx` to create new educational content:

```typescript
const trainingModules = [
  // Existing modules
  {
    id: 'module-4',
    title: 'Your New Module',
    description: 'Description of your module',
    content: 'Overview content',
    completed: false,
    steps: [
      // Add steps here
    ],
  },
];
```

## Future Enhancements

- User authentication and profile management
- API integration with live market data
- Progress tracking for training modules
- Community forums and discussion
- n8n workflow automation
- Custom alerts for pattern detection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by Ross Cameron's trading education
- Built with Next.js and Tailwind CSS
- Chart functionality powered by Lightweight Charts 