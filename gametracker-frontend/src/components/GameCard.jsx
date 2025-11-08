function GameCard({ game }) {
  return (
    <div className="game-card">
      <h3>{game.nombre}</h3>
      <p><strong>Género:</strong> {game.genero}</p>
      <p><strong>Año de lanzamiento:</strong> {game.lanzamiento}</p>
    </div>
  );
}

export default GameCard;