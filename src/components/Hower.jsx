import React, { useState } from "react";
import "../styles/Hower.css";

const Hower = ({ player }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hover-container">
      {/* Player Name */}
      <span
        className="player-name"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {player.name}
      </span>

      {/* Stat Card */}
      {isHovered && (
        <div className="stat-card">
          <div className="player-image"></div>
          <h3>{player.name}</h3>
          <p>Rank: #{player.rank}</p>
          <p>Matches: {player.matches}</p>
          <p>Points: {player.points}</p>
          <p>Win Rate: {player.winRate}%</p>
        </div>
      )}
    </div>
  );
};

export default Hower;
