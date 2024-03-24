import React, { useState, useEffect } from 'react';
import "./Stopwatch.css";

const Stopwatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [pauseTime, setPauseTime] = useState(null);
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        let interval;
        if (startTime && !pauseTime) {
            interval = setInterval(updateStopwatch, 1000);
        }
        return () => clearInterval(interval);
    }, [startTime, pauseTime]);

    const startStopwatch = () => {
        if (!startTime || pauseTime) {
            const newStartTime = pauseTime ? new Date(new Date() - (pauseTime - startTime)) : new Date();
            setStartTime(newStartTime);
            setPauseTime(null);
        }
    };
    

    const stopWatch = () => {
        if (startTime && !pauseTime) {
            setPauseTime(new Date());
        }
    };

    const resetStopwatch = () => {
        setStartTime(null);
        setPauseTime(null);
        setTime("00:00:00");
    };

    const updateStopwatch = () => {
        const currentTime = new Date();
        const elapsed = pauseTime ? pauseTime.getTime() - startTime.getTime() : currentTime.getTime() - startTime.getTime();
        const seconds = Math.floor(elapsed / 1000) % 60;
        const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
        const hours = Math.floor(elapsed / (1000 * 60 * 60));

        const displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
        setTime(displayTime);
    };

    const pad = (number) => {
        return (number < 10 ? "0" : "") + number;
    };

    return (
        <div>
            <h1> Stopwatch</h1>
            <h2>Time passed: {time}</h2>
                <div className='button-container'>
                <button id="Start" onClick={startStopwatch}>Start</button>
                <button id="Stop" onClick={stopWatch}>Stop</button>
                <button id="Reset" onClick={resetStopwatch}>Reset</button>
                </div>
        </div>
    );
};

export default Stopwatch;
