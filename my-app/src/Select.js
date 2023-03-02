import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Select = () => {
    const [numberOfQuestions, setNumberOfQuestions] = useState(10);
    const [timeLimit, setTimeLimit] = useState(30);
    const location = useLocation();
    const forceLogin = location.state && location.state.forceLogin;

    useEffect(() => {
        if (forceLogin) {
            // TODO: fetch playlists and set selected playlist id
        }
    }, [forceLogin]);

    const handleNumberOfQuestionsChange = (event) => {
        setNumberOfQuestions(event.target.value);
    };

    const handleTimeLimitChange = (event) => {
        setTimeLimit(event.target.value);
    };

    return (
        <div>
            <h1>Select Quiz Options</h1>
            <label htmlFor="number-of-questions">Number of questions:</label>
            <select id="number-of-questions" value={numberOfQuestions} onChange={handleNumberOfQuestionsChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
            </select>
            {forceLogin && (
                <>
                    <br />
                    <label htmlFor="time-limit">Time limit (seconds):</label>
                    <select id="time-limit" value={timeLimit} onChange={handleTimeLimitChange}>
                        <option value={30}>30</option>
                        <option value={60}>60</option>
                        <option value={90}>90</option>
                    </select>
                </>
            )}
        </div>
    );
};

export default Select;
