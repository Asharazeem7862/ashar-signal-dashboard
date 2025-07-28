export function getMockSignal() {
  const random = Math.random();
  const direction = random > 0.5 ? "BUY" : "SELL";

  return {
    direction,
    emaTrend: direction === "BUY" ? "UP" : "DOWN",
    rsi: (Math.random() * (70 - 30) + 30).toFixed(2),
    macd: (Math.random() * 2 - 1).toFixed(2),
    strength: Math.floor(Math.random() * 21) + 80, // 80% to 100%
  };
}