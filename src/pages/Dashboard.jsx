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
      <h2>Player List</h2>
      <ul>
        {dummyPlayers.map((player) => (
          <li key={player.id} className="player-card">
            {player.name} - {player.team} - Rs.{player.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
