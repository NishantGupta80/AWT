import React, { useState, useEffect, useRef } from 'react';

export default function CountdownTimer() {
  const [hoursInput, setHoursInput] = useState('');
  const [minutesInput, setMinutesInput] = useState('');
  const [secondsInput, setSecondsInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const formatTime = (totalSeconds) => {
    const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const startTimer = () => {
    const h = parseInt(hoursInput) || 0;
    const m = parseInt(minutesInput) || 0;
    const s = parseInt(secondsInput) || 0;

    const total = h * 3600 + m * 60 + s;

    if (total > 0) {
      setTimeLeft(total);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(0);
    setHoursInput('');
    setMinutesInput('');
    setSecondsInput('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Custom Countdown Timer</h1>

        <div className="flex justify-center gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-700">Hours</label>
            <input
              type="number"
              min="0"
              value={hoursInput}
              onChange={(e) => setHoursInput(e.target.value)}
              disabled={isRunning}
              className="w-20 p-2 border rounded-lg text-center"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Minutes</label>
            <input
              type="number"
              min="0"
              value={minutesInput}
              onChange={(e) => setMinutesInput(e.target.value)}
              disabled={isRunning}
              className="w-20 p-2 border rounded-lg text-center"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Seconds</label>
            <input
              type="number"
              min="0"
              max="59"
              value={secondsInput}
              onChange={(e) => setSecondsInput(e.target.value)}
              disabled={isRunning}
              className="w-20 p-2 border rounded-lg text-center"
              placeholder="0"
            />
          </div>
        </div>

        <div className="text-5xl text-blue-600 font-mono text-center mb-6">
          {formatTime(timeLeft)}
        </div>

        <div className="flex justify-center gap-4">
          {!isRunning ? (
            <button
              onClick={startTimer}
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl"
            >
              Start
            </button>
          ) : (
            <button
              onClick={() => setIsRunning(false)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-xl"
            >
              Pause
            </button>
          )}
          <button
            onClick={resetTimer}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
