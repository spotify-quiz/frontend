import React from 'react';
import { Link } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';

class Quiz extends React.Component {
    state = {
        playlist: null,
        currentSongIndex: 0,
        selectedAnswer: '',
        correctAnswer: '',
        showAnswer: false,
        quizCompleted: false,
    };

    componentDidMount() {
        const { playlistId } = this.props.match.params;

        // Use Spotipy API to retrieve playlist by ID
        // Store playlist in component state
    }

    handleAnswerSelect = (event) => {
        this.setState({ selectedAnswer: event.target.value });
    };

    handleNextSong = () => {
        const { playlist, currentSongIndex, selectedAnswer } = this.state;

        // Check if selected answer is correct and update component state
        // Advance to the next song if there are more songs in the playlist
        // Otherwise, set the quizCompleted state to true
    };

    render() {
        const { playlist, currentSongIndex, selectedAnswer, correctAnswer, showAnswer, quizCompleted } = this.state;

        if (!playlist) {
            // Redirect to the SelectPage if the playlist is not loaded yet
            return <Link to="/select" />;
        }

        if (quizCompleted) {
            // Redirect to the ResultsPage if the quiz is completed
            return <Link to="/results" />;
        }

        const currentSong = playlist.tracks.items[currentSongIndex].track;

        return (
            <div>
                <h1>Quiz</h1>
                <h2>{playlist.name}</h2>
                <audio src={currentSong.preview_url} controls />
                <h3>Question {currentSongIndex + 1}</h3>
                <p>What is the name of this song?</p>
                {showAnswer && <p>The correct answer is {correctAnswer}</p>}
                <select value={selectedAnswer} onChange={this.handleAnswerSelect}>
                    <option value="">-- Select an answer --</option>
                    {playlist.tracks.items[currentSongIndex].track.artists.map((artist) => (
                        <option key={artist.id} value={artist.name}>
                            {artist.name}
                        </option>
                    ))}
                </select>
                <button onClick={this.handleNextSong} disabled={!selectedAnswer}>
                    Next
                </button>
            </div>
        );
    }
}

export default Quiz;
