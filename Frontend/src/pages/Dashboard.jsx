import "../styles/Dashboard.css"; // Import CSS file

const dummyPlayers = [
  { id: 1, name: "John Silva", team: "University A", price: 1200000 },
  { id: 2, name: "Arjun Perera", team: "University B", price: 900000 },
  { id: 3, name: "Ravi Fernando", team: "University C", price: 1500000 },
  { id: 4, name: "Sahan Jayasuriya", team: "University D", price: 1100000 },
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <div className="profile-image"></div>
        <h3>Team</h3>
        <p>Lores Ipsum</p>
        <h3>Something</h3>
        <p>Lores Ipsum</p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Manage Your Team</h2>

        {/* Top Player Selection */}
        <div className="top-players">
          <div className="player-slot"></div>
          <div className="player-slot"></div>
          <div className="player-slot"></div>
          <div className="player-slot"></div>
          <div className="player-slot"></div>
        </div>

        {/* Player List */}
        <div className="player-list">
          {dummyPlayers.map((player) => (
            <div key={player.id} className="player-card">
              <div className="player-image"></div>
              <p>{player.name}</p>
              <p>{player.team}</p>
              <p>Rs.{player.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar"></div>
    </div>
  );
}
