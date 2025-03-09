import "../styles/Leaderboard.css";
import trophy from "../assets/trophy.png"; // Ensure the correct path

const Leaderboard = () => {
  const players = [
    { name: "Cacey", points: 8888, rank: 1 },
    { name: "Sesil", points: 8888, rank: 2 },
    { name: "Anthony", points: 8888, rank: 3 },
    { name: "Drake", points: 8888, rank: 780 },
    { name: "Emile", points: 8888, rank: 781 },
    { name: "Lucy", points: 8888, rank: 782 },
    { name: "John", points: 8888, rank: 783, highlight: true },
    { name: "Miller", points: 8888, rank: 784 },
  ];

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="leaderboard">
        {players.length > 0 ? (
          players.map((player) => (
            <div
              key={player.name} // Using unique key
              className={`leaderboard-item ${player.highlight ? "highlight" : ""}`}
              style={{ backgroundColor: getColor(player.rank) }}
            >
              <span className="player-name">{player.name || "Unknown"}</span>
              <span className="player-points">{player.points || 0} points</span>
              <span className="player-rank">#{player.rank || "N/A"}</span>
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
