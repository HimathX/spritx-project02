import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Dashboard.css"; // Import CSS file

const api = axios.create({
  baseURL: 'http://127.0.0.1:8093',  // Updated to match your FastAPI port
});

export default function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch username from local storage or context
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const fetchPlayers = async () => {
      try {
        const response = await api.get('/players');
        setPlayers(response.data.players);
      } catch (error) {
        console.error('Error fetching players', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="profile-image"></div>
        <h3>Team</h3>
        <p>{username ? `Hello, ${username}` : 'Loading session...'}</p>
        <h3>Something</h3>
        <p>Lores Ipsum</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Manage Your Team</h2>

        {/* Top Player Selection */}
        <div className="top-players">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="player-slot"></div>
          ))}
        </div>

        {/* Player List */}
        <div className="player-list">
          {loading ? (
            <p>Loading players...</p>
          ) : (
            players.map((player) => (
              <div key={player.id} className="player-card">
                <div className="player-image"></div>
                <p>{player.name}</p>
                <p>{player.university}</p>
                <p>Runs: {player.total_runs}</p>
                <p>Wickets: {player.wickets}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar"></div>
    </div>
  );
}