import React from "react";
import SignalCard from "./components/SignalCard";

const pairs = ["EUR/USD", "GBP/JPY", "USD/JPY", "AUD/CAD"];
const timeframes = ["1m", "2m", "5m"];

export default function App() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-green-400">
        🔮 Binary Trading Signal Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-4">
        {pairs.map((pair) =>
          timeframes.map((tf) => (
            <SignalCard key={`${pair}-${tf}`} pair={pair} timeframe={tf} />
          ))
        )}
      </div>
    </main>
  );
}