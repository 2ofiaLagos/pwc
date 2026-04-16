import React, { useState } from "react";

export default function GuiaInteractiva() {
  const [paso, setPaso] = useState(0);

  const pasos = [
    {
      titulo: "Identifica la situación",
      cuerpo: "¿Qué está sucediendo? Puede ser una conducta indebida, un problema laboral o un incumplimiento de procesos.",
      imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    },
    {
      titulo: "Protección contra represalias",
      cuerpo: "Nuestra plataforma garantiza que no habrá consecuencias por reportar de buena fe. Tu bienestar es prioridad.",
      imagen: "https://images.unsplash.com/photo-1517048676732-d65bc937f952"
    },
    {
      titulo: "Prepara la información",
      cuerpo: "Ten a la mano detalles: fechas, lugares y si tienes evidencia (fotos o documentos), mejor.",
      imagen: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
    },
    {
      titulo: "Generación de seguimiento",
      cuerpo: "Al enviar tu reporte, el sistema creará automáticamente un usuario para que consultes el estado del caso.",
      imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    }
  ];

  const siguiente = () => paso < pasos.length - 1 ? setPaso(paso + 1) : null;
  const anterior = () => paso > 0 ? setPaso(paso - 1) : null;

  return (
    <div style={container}>
      {/* Barra de Progreso Superior */}
      <div style={progressBarContainer}>
        <div style={{...progressFill, width: `${((paso + 1) / pasos.length) * 100}%`}}></div>
      </div>

      <div style={contentLayout}>
        {/* Lado Izquierdo: Texto */}
        <div style={textSide}>
          <span style={stepBadge}>Paso {paso + 1} de {pasos.length}</span>
          <h1 style={stepTitle}>{pasos[paso].titulo}</h1>
          <p style={stepDescription}>{pasos[paso].cuerpo}</p>
          
          <div style={navButtons}>
            {paso > 0 && <button onClick={anterior} style={backLink}>Anterior</button>}
            
            {paso < pasos.length - 1 ? (
              <button onClick={siguiente} style={mainBtn}>Entendido, siguiente</button>
            ) : (
              <button onClick={() => window.location.href='/denuncia'} style={ctaBtn}>
                Ir al Canal de Denuncia →
              </button>
            )}
          </div>
        </div>

        {/* Lado Derecho: Imagen con estilo minimalista */}
        <div style={imageSide}>
          <img src={pasos[paso].imagen} alt="Guía" style={stepImage} />
        </div>
      </div>
    </div>
  );
}

const container = {
  fontFamily: "'Inter', sans-serif",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff"
};

const progressBarContainer = { height: "6px", width: "100%", backgroundColor: "#eee" };
const progressFill = { height: "100%", backgroundColor: "#D04A02", transition: "0.4s ease" };

const contentLayout = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100%",
  alignItems: "center"
};

const textSide = { padding: "0 15%" };
const imageSide = { height: "100%", overflow: "hidden" };

const stepBadge = { color: "#D04A02", fontWeight: "bold", textTransform: "uppercase", fontSize: "12px" };
const stepTitle = { fontSize: "48px", fontFamily: "Georgia, serif", margin: "20px 0" };
const stepDescription = { fontSize: "18px", color: "#555", lineHeight: "1.6", marginBottom: "40px" };

const stepImage = { width: "100%", height: "100%", objectFit: "cover" };

const mainBtn = {
  padding: "15px 40px",
  backgroundColor: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  fontSize: "16px"
};

const ctaBtn = {
  padding: "15px 40px",
  backgroundColor: "#D04A02",
  color: "#fff",
  border: "none",
  borderRadius: "30px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold"
};

const backLink = { background: "none", border: "none", marginRight: "20px", cursor: "pointer", color: "#666" };
const navButtons = { display: "flex", alignItems: "center" };