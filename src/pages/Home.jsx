import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={containerStyle}>
      {/* --- Hero Section --- */}
      <section style={heroSection}>
        <div style={{ ...heroImage, backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')" }}>
             <div style={heroOverlay}>pwc</div>
        </div>
        <div style={{ ...heroImage, backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72')" }}></div>
      </section>

      {/* --- Grid de Acciones con más aire --- */}
      <main style={gridContainer}>
        <div style={cardStyle}>
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" alt="Trivia" style={cardImg} />
          <h3 style={cardTitle}>Pon a prueba tu conocimiento</h3>
          <p style={cardText}>Analiza casos reales e identifica si son hostigamiento</p>
          <Link to="/trivia">
            <button style={capsuleBtn}>Jugar</button>
          </Link>
        </div>

        <div style={cardStyle}>
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216" alt="Guia" style={cardImg} />
          <h3 style={cardTitle}>¿Qué hago si me pasa?</h3>
          <p style={cardText}>Guía paso a paso según tu situación</p>
          <Link to="/guia">
            <button style={capsuleBtn}>Acceder</button>
          </Link>
        </div>

        <div style={cardStyle}>
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85" alt="Leyes" style={cardImg} />
          <h3 style={cardTitle}>Lo que dice la ley</h3>
          <p style={cardText}>Conoce la Ley Nº 27942 y tus derechos</p>
          <Link to="/leyes">
            <button style={capsuleBtn}>Leer más</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

/* --- Estilos con Espaciado Mejorado --- */

const containerStyle = { 
  fontFamily: "Arial, sans-serif",
  lineHeight: "1.6" // Mejora la lectura en toda la página
};

const heroSection = { 
  display: "flex", 
  height: "450px", // Aumentamos un poco la altura del Hero
  overflow: "hidden",
  marginBottom: "40px" // Espacio entre el Hero y el contenido
};

const heroImage = { flex: 1, backgroundSize: "cover", backgroundPosition: "center", position: "relative" };
const heroOverlay = { position: "absolute", bottom: "40px", left: "60px", color: "white", fontSize: "90px", fontWeight: "bold" };

const gridContainer = { 
  display: "grid", 
  gridTemplateColumns: "repeat(3, 1fr)", 
  gap: "60px", // Más espacio entre las columnas del grid
  padding: "80px 12%", // Más margen a los lados y arriba/abajo
  maxWidth: "1400px",
  margin: "0 auto"
};

const cardStyle = { 
  display: "flex", 
  flexDirection: "column",
  gap: "15px" // Espacio interno entre elementos de la tarjeta
};

const cardImg = { 
  width: "100%", 
  height: "220px", // Imágenes un poco más grandes
  objectFit: "cover",
  marginBottom: "10px" 
};

const cardTitle = { 
  fontSize: "20px", 
  fontWeight: "bold", 
  margin: "10px 0",
  minHeight: "50px" // Asegura que los textos se alineen si un título es más largo
};

const cardText = { 
  fontSize: "15px", 
  color: "#555", 
  marginBottom: "20px" 
};

const capsuleBtn = {
  padding: "12px 35px", // Botones ligeramente más grandes
  backgroundColor: "white",
  border: "1px solid #707070", 
  borderRadius: "30px", // Forma de cápsula perfecta
  cursor: "pointer",
  fontSize: "14px",
  color: "#333",
  fontWeight: "500",
  width: "fit-content",
  transition: "all 0.3s ease"
};