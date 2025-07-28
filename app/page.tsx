"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [signal, setSignal] = useState("Loading...");
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      const signals = ["🟢 BUY", "🔴 SELL", "⚪️ No Trade"];
      const random = Math.floor(Math.random() * signals.length);
      setSignal(signals[random]);
      setCountdown(60); // reset timer
    }, 60000); // Every 1 min

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">💹 Ashar Binary Signal Dashboard</h1>
      <div className="bg-gray-800 p-6 rounded-xl shadow-md text-center w-full max-w-md">
        <p className="text-xl">Next Signal:</p>
        <h2 className="text-5xl font-bold mt-2 mb-4">{signal}</h2>
        <p className="text-sm text-gray-400">Refreshing in: {countdown}s</p>
      </div>
    </main>
  );
}