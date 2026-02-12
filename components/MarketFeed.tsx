import React, { useState, useMemo } from 'react';
import { ChevronLeft } from 'lucide-react';

// Generate sample candlestick data [open, high, low, close]
const generateCandleData = (count: number) => {
  const data = [];
  let price = 100;
  for (let i = 0; i < count; i++) {
    const change = (Math.random() - 0.45) * 4;
    const open = price;
    price = price + change;
    const low = Math.min(open, price) - Math.random() * 1.5;
    const high = Math.max(open, price) + Math.random() * 1.5;
    data.push({ open, high, low, close: price });
  }
  return data;
};

const SECTORS = [
  { name: 'Energy', percent: 1.3 },
  { name: 'AlgoRyx', percent: 0.36 },
  { name: 'Utilities', percent: 0.29 },
  { name: 'Healthcare', percent: 0.22 },
  { name: 'Technology', percent: -0.15 },
];

const COMPANY_NEWS = [
  {
    symbol: 'NVDA',
    name: 'NVIDIA',
    color: 'bg-green-600',
    headline: 'Saudi Arabia partner advance AI ambition',
    time: 'Today - Just now',
  },
  {
    symbol: 'META',
    name: 'Meta',
    color: 'bg-blue-600',
    headline: 'Microsoft cuts 3% of its 228,000 staff to streamline management...',
    time: 'Today - 2 minutes ago',
  },
];

type Timeframe = '1M' | '3M' | 'YTD' | '1Y' | '2Y';

export const MarketFeed: React.FC = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>('1Y');
  const candleData = useMemo(() => generateCandleData(24), []);

  const portfolioValue = 130067.4;
  const pastYearReturn = 31145.53;
  const pastYearReturnPercent = 31.44;

  // Candlestick chart dimensions
  const chartWidth = 280;
  const chartHeight = 120;
  const padding = { top: 8, right: 8, bottom: 8, left: 8 };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;

  const allHigh = Math.max(...candleData.map((c) => c.high));
  const allLow = Math.min(...candleData.map((c) => c.low));
  const range = allHigh - allLow || 1;
  const candleW = Math.max(2, (plotWidth / candleData.length) * 0.6);
  const gap = plotWidth / candleData.length;

  const getY = (val: number) =>
    padding.top + plotHeight - ((val - allLow) / range) * plotHeight;

  return (
    <div className="w-full h-full min-h-[520px] bg-[#0d0d0d] text-white flex flex-col p-4 overflow-hidden font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 flex-1 min-h-0">
        {/* Left column: Portfolio + Sector */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          {/* Portfolio value card */}
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-4 flex-shrink-0">
            <p className="text-xs text-neutral-400 mb-1">Portfolio value</p>
            <p className="text-2xl font-bold tracking-tight">
              ${portfolioValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            {/* Candlestick chart */}
            <div className="mt-3">
              <svg width="100%" height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible">
                {candleData.map((c, i) => {
                  const x = padding.left + i * gap + (gap - candleW) / 2;
                  const isUp = c.close >= c.open;
                  const bodyTop = getY(Math.max(c.open, c.close));
                  const bodyBottom = getY(Math.min(c.open, c.close));
                  const bodyH = Math.max(1, bodyBottom - bodyTop);
                  return (
                    <g key={i}>
                      <line
                        x1={x + candleW / 2}
                        y1={getY(c.high)}
                        x2={x + candleW / 2}
                        y2={getY(c.low)}
                        stroke={isUp ? '#22c55e' : '#ef4444'}
                        strokeWidth="1"
                      />
                      <rect
                        x={x}
                        y={bodyTop}
                        width={candleW}
                        height={bodyH}
                        fill={isUp ? '#22c55e' : '#ef4444'}
                        rx={0}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] text-neutral-400">Bullish</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[10px] text-neutral-400">Bearish</span>
              </div>
            </div>
            <div className="flex gap-1 mt-3">
              {(['1M', '3M', 'YTD', '1Y', '2Y'] as Timeframe[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTimeframe(t)}
                  className={`px-2.5 py-1 text-[10px] font-medium rounded transition-colors ${timeframe === t
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/[0.06] text-neutral-400 hover:text-neutral-300'
                    }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Sector Performance */}
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-4 flex-shrink-0">
            <p className="text-xs text-neutral-400 mb-3">Sector Performance</p>
            <div className="space-y-3">
              {SECTORS.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className="text-xs text-white w-20 truncate">{s.name}</span>
                  <div className="flex-1 h-2 bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${s.percent >= 0 ? 'bg-green-500/80' : 'bg-red-500/80'}`}
                      style={{
                        width: `${Math.min(100, Math.abs(s.percent) * 30)}%`,
                      }}
                    />
                  </div>
                  <span
                    className={`text-[10px] font-medium w-10 text-right ${s.percent >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                  >
                    {s.percent >= 0 ? '+' : ''}{s.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Returns, Morning recap, Company news */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Past year returns */}
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-4 flex-shrink-0">
            <p className="text-xs text-neutral-400 mb-1">Past year returns</p>
            <p className="text-xl font-bold text-green-500">
              +${pastYearReturn.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-green-500">+{pastYearReturnPercent}%</p>
          </div>

          {/* Morning recap */}
          <div className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-4 flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <button type="button" className="p-0.5 text-neutral-400 hover:text-white">
                <ChevronLeft size={14} />
              </button>
              <p className="text-xs text-neutral-400">Morning recap</p>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Trump's renewed tariff push is shaking markets. Q1 GDP shrank 0.2% as firms rushed imports...
            </p>
            <p className="text-[10px] text-neutral-500 mt-2">Summarized at 1:13</p>
          </div>

          {/* Company news cards */}
          <div className="flex flex-col gap-3 flex-1 min-h-0">
            {COMPANY_NEWS.map((company) => (
              <div
                key={company.symbol}
                className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-3 flex-shrink-0"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0 ${company.color}`}
                  >
                    {company.symbol.slice(0, 2)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-white">{company.symbol}</p>
                    <p className="text-[10px] text-neutral-400 mt-0.5 line-clamp-2">
                      {company.headline}
                    </p>
                    <p className="text-[10px] text-neutral-500 mt-1">{company.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-lg md:text-xl font-serif italic text-white/90 mt-4 pt-2 border-t border-white/[0.06]">
        Elevate Your Portfolio
      </p>
    </div>
  );
};
