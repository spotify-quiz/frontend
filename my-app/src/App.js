import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Select from './Select';
import Quiz from './Quiz';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/select" element={<Select />} />
                <Route path="/quiz/:playlistId/:number" element={<Quiz />} />
            </Routes>
        </Router>
    );
}

export default App;
