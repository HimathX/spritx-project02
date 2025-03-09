import { useEffect, useState } from "react";
import axios from 'axios';
import "../styles/TeamManagement.css"; // Import CSS file
import Hower from '../components/Hower.jsx'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8093',  // Updated to match your FastAPI port
});

export default function TeamManagement() {
  const [team, setTeam] = useState([]);
  const [budget, setBudget] = useState(9000000);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const addToTeam = async (player) => {
    if (budget - player.value >= 0 && !team.find((p) => p.id === player.id)) {
      try {
        await api.post('/team', { username: localStorage.getItem('username'), player_id: player.id });
        setTeam([...team, player]);
        setBudget(budget - player.value);
      } catch (error) {
        console.error('Error adding player to team', error);
      }
    } else {
      alert("Not enough budget or player already added!");
    }
  };

  return (
    <div className="team-container">
      <h2>Manage Your Team</h2>
      <p>Budget: Rs.{budget}</p>
      
      <h3>Available Players:</h3>
      <ul>
        {loading ? (
          <p>Loading players...</p>
        ) : (
          players.map((player, index) => (  // Added index as fallback key
            <li key={player.id || index} className="player-card"> {/* Fallback to index if id is missing */}
                <div className="player-image"></div> {/* Blank Image Placeholder */}
                <p>{player.name}  Rs.{player.value}</p>
                <button onClick={() => addToTeam(player)}>Add</button>
            </li>
          ))
        )}
      </ul>

      <h3>Your Team:</h3>
      <ul>
        {team.map((player, index) => (
          <li key={player.id || index} className="team-player"><Hower player={player}/></li> 
        ))}
      </ul>
    </div>
  );
}
