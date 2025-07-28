import React from "react";
import { getMockSignal } from "../utils";

export default function SignalCard({ pair, timeframe }) {
  const signal = getMockSignal();

  return (
    <div className="bg-gray-800 rounded-2xl shadow p-4">
      <h2 className="text-xl font-semibold text-white mb-2">
        {pair} ({timeframe})
      </h2>
      <p className="text-sm text-gray-400 mb-2">Next Candle Prediction:</p>
      <div
        className={`text-2xl font-bold ${
          signal.direction === "BUY" ? "text-green-400" : "text-red-400"
        }`}
      >
        {signal.direction === "BUY" ? "🟢 BUY" : "🔴 SELL"}
      </div>
      <div className="mt-2 text-sm text-gray-300">
        EMA: {signal.emaTrend} | RSI: {signal.rsi} | MACD: {signal.macd}
      </div>
      <p className="mt-1 text-xs text-yellow-300">Signal Strength: {signal.strength}%</p>
    </div>
  );
}