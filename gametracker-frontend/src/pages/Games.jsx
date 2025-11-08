import { useEffect, useState } from "react";
import { getGames } from "../services/gamesService";
import GameCard from "../components/GameCard";

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getGames();
      setGames(data);
    };
    fetchGames();
  }, []);

  return (
    <div className="games-page">
      <h2>🎮 Mis Juegos</h2>

      {games.length === 0 ? (
        <p>No tienes juegos agregados todavía.</p>
      ) : (
        <div className="game-list">
          {games.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Games;