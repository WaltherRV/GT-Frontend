import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>🎮 GameTracker</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/games" style={styles.link}>Mis Juegos</Link>
        <Link to="/reviews" style={styles.link}>Reseñas</Link>
        <Link to="/stats" style={styles.link}>Estadísticas</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#1e1e1e",
    color: "#fff",
  },
  title: {
    fontSize: "1.5rem",
  },
  links: {
    display: "flex",
    gap: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Navbar;