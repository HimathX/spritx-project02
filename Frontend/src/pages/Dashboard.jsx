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
      <div key={player.id || player.name} className="player-card">
        <div className="player-image"></div>
        <p>{player.name}</p>
        <p>{player.university}</p>
        <p>Runs: {player.total_runs}</p>
        <p>Wickets: {player.wickets}</p>
      </div>
    ))
  )}
</div>
