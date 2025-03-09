import "../styles/Dashboard.css";
import playerImage from "../assets/player.png";

const Players = () => {
  const players = [
    { name: "Hardy Scott", price: "$32,000", imgSrc: "src/assets/player1.png" },
    { name: "Nate Winnings", price: "$80,000", imgSrc: "src/assets/player2.png" },
    { name: "Foo Barman", price: "$54,000", imgSrc: "src/assets/player3.png" },
  ];

  return (
    <div className="players-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="image-container">
          <img src={playerImage} alt="Cricket Players" className="left-image" />
        </div>
        <p className="description-text">
        Welcome to your Dashboard! <br />
        The heart of your journey! Track your progress, analyze key stats, and manage your team all in one place. Stay ahead of the game with real-time insights and take control of your performance. Your goals, your data, simplified.
          <br />
          Whether you’re organizing matches or evaluating player progress, your dashboard ensures everything is at your fingertips for ultimate team success.
          <br />

          <br />
          Keep pushing to lead the pack and dominate the competition!
        </p>
      </div>

      {/* Players Grid Section */}
      <div className="players-grid">
        {players.map((player, index) => (
          <div key={index} className="player-card">
            <img src={player.imgSrc} alt={player.name} className="player-image" />
            <div className="player-info">
              <span className="player-name">{player.name}</span>
              <span className="player-price">{player.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
