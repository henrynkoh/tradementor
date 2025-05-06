'use client';

import { useEffect, useRef, useState } from 'react';
import { createChart, ColorType, IChartApi, ISeriesApi, CandlestickData, Time } from 'lightweight-charts';

interface ChartComponentProps {
  data: {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume?: number;
  }[];
  width?: number;
  height?: number;
  showVWAP?: boolean;
  showSMA?: boolean;
}

export default function ChartComponent({
  data,
  width = 800,
  height = 400,
  showVWAP = true,
  showSMA = true,
}: ChartComponentProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<IChartApi | null>(null);
  const [candleSeries, setCandleSeries] = useState<ISeriesApi<'Candlestick'> | null>(null);
  const [vwapSeries, setVwapSeries] = useState<ISeriesApi<'Line'> | null>(null);
  const [smaSeries, setSmaSeries] = useState<ISeriesApi<'Line'> | null>(null);
  const isChartDisposed = useRef(false);
  
  // Create chart instance
  useEffect(() => {
    if (chartContainerRef.current) {
      // Reset the disposed state
      isChartDisposed.current = false;
      
      // Clean up old chart safely
      if (chart) {
        try {
          chart.remove();
        } catch (e) {
          console.warn('Chart was already disposed');
        }
      }
      
      // Create new chart
      const newChart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth || width,
        height: height,
        layout: {
          background: { type: ColorType.Solid, color: '#1E293B' }, // Darker background
          textColor: '#E2E8F0', // Lighter text for better contrast
        },
        grid: {
          vertLines: { color: '#334155' }, // Darker grid lines
          horzLines: { color: '#334155' },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
          borderColor: '#475569',
        },
      });
      
      setChart(newChart);
      
      // Create candlestick series
      const newCandleSeries = newChart.addCandlestickSeries({
        upColor: '#10B981', // Brighter green
        downColor: '#EF4444', // Brighter red
        borderVisible: false,
        wickUpColor: '#10B981',
        wickDownColor: '#EF4444',
      });
      
      setCandleSeries(newCandleSeries);
      
      // Set data to candlestick series
      const formattedData = data.map(item => ({
        time: item.time,
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
      }));
      
      newCandleSeries.setData(formattedData as CandlestickData<Time>[]);
      
      // Add VWAP series
      if (showVWAP) {
        const newVwapSeries = newChart.addLineSeries({
          color: '#C084FC', // Brighter purple
          lineWidth: 2,
          title: 'VWAP',
        });
        
        // Calculate VWAP - simplified for demonstration
        const vwapData = data.map(item => {
          const typicalPrice = (item.high + item.low + item.close) / 3;
          const volume = item.volume || 1;
          return {
            time: item.time,
            value: typicalPrice * volume / volume,
          };
        });
        
        newVwapSeries.setData(vwapData);
        setVwapSeries(newVwapSeries);
      }
      
      // Add SMA series - 8-day and 20-day
      if (showSMA) {
        const newSmaSeries = newChart.addLineSeries({
          color: '#38BDF8', // Brighter blue
          lineWidth: 2,
          title: '8-day SMA',
        });
        
        // Calculate 8-day SMA - simplified for demonstration
        const smaWindow = 8;
        const smaData = [];
        
        for (let i = 0; i < data.length; i++) {
          if (i >= smaWindow - 1) {
            let sum = 0;
            for (let j = 0; j < smaWindow; j++) {
              sum += data[i - j].close;
            }
            smaData.push({
              time: data[i].time,
              value: sum / smaWindow,
            });
          }
        }
        
        newSmaSeries.setData(smaData);
        setSmaSeries(newSmaSeries);
      }
      
      // Fit content
      newChart.timeScale().fitContent();
      
      // Handle window resize
      const handleResize = () => {
        if (chartContainerRef.current && newChart && !isChartDisposed.current) {
          try {
            newChart.applyOptions({
              width: chartContainerRef.current.clientWidth,
            });
          } catch (e) {
            console.warn('Failed to resize chart, it may be disposed');
          }
        }
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        if (!isChartDisposed.current) {
          try {
            newChart.remove();
            isChartDisposed.current = true;
          } catch (e) {
            console.warn('Error removing chart:', e);
          }
        }
      };
    }
  }, [data, height, width, showVWAP, showSMA]);
  
  return (
    <div className="chart-container w-full">
      <div ref={chartContainerRef} className="chart rounded-lg shadow-md"></div>
    </div>
  );
} 