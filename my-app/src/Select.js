import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPlaylistTracks } from './spotify';

const Select = () => {
    const location = useLocation();
    const { state } = location;
    const [numberOfQuestions, setNumberOfQuestions] = useState('10');
    const [timeLimit, setTimeLimit] = useState('60');
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleNumberOfQuestionsChange = (event) => {
        setNumberOfQuestions(event.target.value);
    };

    const handleTimeLimitChange = (event) => {
        setTimeLimit(event.target.value);
    };

    const handlePlaylistChange = (event) => {
        setSelectedPlaylistId(event.target.value);
    };

    useEffect(() => {
        const fetchPlaylists = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://api.spotify.com/v1/me/playlists', {
                    headers: {
                        Authorization: `Bearer ${state.accessToken}`,
                    },
                });
                const data = await response.json();
                setPlaylists(data.items);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        if (state.accessToken) {
            fetchPlaylists();
        }
    }, [state.accessToken]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await getPlaylistTracks(selectedPlaylistId, state.accessToken);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Select your quiz settings</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Number of questions:
                    <select value={numberOfQuestions} onChange={handleNumberOfQuestionsChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </label>
                <br />
                <br />
                <label>
                    Time limit (in seconds):
                    <select value={timeLimit} onChange={handleTimeLimitChange}>
                        <option value="30">30</option>
                        <option value="60">60</option>
                        <option value="90">90</option>
                    </select>
                </label>
                {state.forceLogin && (
                    <>
                        <br />
                        <br />
                        <label>
                            Playlist:
                            <select value={selectedPlaylistId || ''} onChange={handlePlaylistChange}>
                                {isLoading ? (
                                    <option value="">Loading playlists...</option>
                                ) : (
                                    <>
                                        <option value="">Select a playlist</option>
                                        {playlists.map((playlist) => (
                                            <option key={playlist.id} value={playlist.id}>
                                                {playlist.name}
                                            </option>
                                        ))}
                                    </>
                                )}
                            </select>
                        </label>
                    </>
                )}
                <br />
                <br />
                <button type="submit">Start Quiz</button>
            </form>
        </div>
    );
};

export default Select;
