import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Leaderboard.css";
import trophy from "../assets/trophy.png"; // Ensure the correct path

const api = axios.create({
  baseURL: 'http://127.0.0.1:8093',  // Updated to match your FastAPI port
});

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await api.get('/leaderboard');
        setPlayers(response.data.leaderboard);
      } catch (error) {
        console.error('Error fetching leaderboard', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // Function to determine background color based on rank
  const getColor = (rank) => {
    if (rank === 1) return "gold";
    if (rank === 2) return "silver";
    if (rank === 3) return "bronze";
    return "#222"; // Default color
  };

  return (
    <div className="leaderboard-container">
      <div className="left-section">
        <div className="trophy-section">
          <img src={trophy} alt="Trophy" className="trophy-image" />
        </div>
        <p className="description-text">
        Rise through the ranks on the Cricket Select Team Leaderboard! Compete with other teams, track your team’s position, and see how your players stack up against the best. Keep pushing to lead the pack and dominate the competition!
        </p>
      </div>
      <div className="leaderboard">
        {loading ? (
          <p>Loading leaderboard...</p>
        ) : players.length > 0 ? (
          players.map((player, index) => (
            <div
              key={player.username} // Using unique key
              className={`leaderboard-item ${player.highlight ? "highlight" : ""}`}
              style={{ backgroundColor: getColor(index + 1) }}
            >
              <span className="player-name">{player.username || "Unknown"}</span>
              <span className="player-points">{player.points || 0} points</span>
              <span className="player-rank">#{index + 1 || "N/A"}</span>
            </div>
          ))
        ) : (
          <p>No players available.</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;