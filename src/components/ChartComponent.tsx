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
  
  // Create chart instance
  useEffect(() => {
    if (chartContainerRef.current) {
      // Clean up old chart
      if (chart) {
        chart.remove();
      }
      
      // Create new chart
      const newChart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth || width,
        height: height,
        layout: {
          background: { type: ColorType.Solid, color: '#FFFFFF' },
          textColor: '#333',
        },
        grid: {
          vertLines: { color: '#F0F3FA' },
          horzLines: { color: '#F0F3FA' },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
        },
      });
      
      setChart(newChart);
      
      // Create candlestick series
      const newCandleSeries = newChart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
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
          color: '#9c27b0',
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
          color: '#2196F3',
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
        if (chartContainerRef.current && newChart) {
          newChart.applyOptions({
            width: chartContainerRef.current.clientWidth,
          });
        }
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        newChart.remove();
      };
    }
  }, [data, height, width, showVWAP, showSMA]);
  
  return (
    <div className="chart-container w-full">
      <div ref={chartContainerRef} className="chart bg-white rounded-lg shadow-md"></div>
    </div>
  );
} 