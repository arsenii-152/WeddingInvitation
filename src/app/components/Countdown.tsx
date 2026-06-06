import { useEffect, useState } from "react";

const TARGET = new Date("2026-08-22T14:30:00+03:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const pad = (n: number) => n.toString().padStart(2, "0");

export function Countdown() {
  const [t, setT] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { v: t.days, l: "Дни" },
    { v: t.hours, l: "Часы" },
    { v: t.minutes, l: "Минуты" },
    { v: t.seconds, l: "Секунды" },
  ];

  return (
    <div className="flex justify-center gap-6 sm:gap-12 md:gap-16">
      {items.map((it) => (
        <div key={it.l} className="flex flex-col items-center">
          <div
            className="text-[#a62d34] tabular-nums"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 8vw, 55px)", lineHeight: 1 }}
          >
            {pad(it.v)}
          </div>
          <div
            className="mt-3 text-[#a62d34] uppercase"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400, fontSize: 12, letterSpacing: "1px" }}
          >
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
}
