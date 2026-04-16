import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Estilos base para los links
  const navLink = {
    textDecoration: "none",
    color: "#000",
    fontSize: "14px",
    fontWeight: "500",
    transition: "0.3s"
  };

  // Estilo para el link activo (naranja y con subrayado)
  const navLinkActive = {
    ...navLink,
    color: "#D04A02",
    borderBottom: "2px solid #D04A02",
    paddingBottom: "5px"
  };

  const isPathActive = (path) => location.pathname === path;

  return (
    <nav style={headerStyle}>
      {/* Sección Izquierda: Logo y Eslogan */}
      <div style={leftSection}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1200px-PricewaterhouseCoopers_Logo.svg.png" 
          alt="PwC Logo" 
          style={{ height: "30px" }} 
        />
        <div style={verticalDivider}></div>
        <span style={sloganText}>
          "El silencio no protege, el conocimiento sí"
        </span>
      </div>

      {/* Sección Derecha: Links de navegación */}
      <div style={linksContainer}>
        <Link to="/" style={isPathActive("/") ? navLinkActive : navLink}>Inicio</Link>
        <Link to="/trivia" style={isPathActive("/trivia") ? navLinkActive : navLink}>Trivia</Link>
        <Link to="/guia" style={isPathActive("/guia") ? navLinkActive : navLink}>Guía</Link>
        <Link to="/leyes" style={isPathActive("/leyes") ? navLinkActive : navLink}>Leyes</Link>
        <Link to="/denuncia" style={isPathActive("/denuncia") ? navLinkActive : navLink}>Denuncia</Link>
      </div>
    </nav>
  );
}

/* --- Objetos de Estilo --- */

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 5%",
  backgroundColor: "#fff",
  borderBottom: "1px solid #e0e0e0",
  fontFamily: "Arial, sans-serif"
};

const leftSection = {
  display: "flex",
  alignItems: "center",
  gap: "15px"
};

const verticalDivider = {
  width: "1px",
  height: "35px",
  backgroundColor: "#999"
};

const sloganText = {
  fontSize: "12px",
  color: "#666",
  fontStyle: "italic",
  maxWidth: "150px",
  lineHeight: "1.2"
};

const linksContainer = {
  display: "flex",
  gap: "25px",
  alignItems: "center"
};