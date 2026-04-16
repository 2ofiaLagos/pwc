import React from "react";

export default function Leyes() {
  return (
    <div style={container}>
      {/* Sección Hero con Imagen y Título superpuesto */}
      <div style={heroContainer}>
        <div style={heroContent}>
          <h1 style={heroTitle}>Lo que dice la Ley</h1>
        </div>
      </div>

      {/* Cuerpo de texto */}
      <div style={textContainer}>
        <p style={mainParagraph}>
          En concordancia con la Ley Nº 27942 de Prevención y Sanción del Hostigamiento Sexual, 
          los empleadores públicos y privados tienen el deber de implementar medidas preventivas, 
          investigar denuncias y sancionar a los agresores en entornos con o sin relación de 
          subordinación. En casos de incumplimiento de estas normas por parte de la empresa, 
          la víctima o un testigo puede denunciar en el área de RR.HH., Comité de Intervención 
          frente al Hostigamiento Sexual, o a la autoridad designada en la institución. Después, 
          se abrirá un proceso de investigación para recoger la versión de la víctima, del 
          denunciado y de testigos, así como pruebas (mensajes, correos, videos, etc.).
        </p>

        {/* Cápsula Naranja */}
        <div style={alertCapsule}>
          Si el empleador no investiga o no sanciona, puede ser 
          sancionado por la autoridad de trabajo (SUNAFIL) con 
          multas administrativas.
        </div>
      </div>
    </div>
  );
}

/* --- Estilos --- */

const container = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#fff",
  minHeight: "100vh",
};

const heroContainer = {
  width: "100%",
  height: "400px",
  backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72')", // Imagen de oficina/equipo
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
};

const heroContent = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(to right, rgba(208, 74, 2, 0.4), rgba(0,0,0,0.1))", // Overlay cálido
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  padding: "40px 60px",
};

const heroTitle = {
  color: "white",
  fontSize: "48px",
  fontFamily: "Georgia, serif",
  fontWeight: "bold",
  margin: 0,
};

const textContainer = {
  padding: "40px 10%",
  maxWidth: "900px",
  margin: "0 auto",
};

const mainParagraph = {
  fontSize: "16px",
  lineHeight: "1.6",
  textAlign: "justify",
  color: "#333",
  marginBottom: "40px",
};

const alertCapsule = {
  backgroundColor: "#FF7A33", // Naranja brillante
  color: "black",
  padding: "30px 50px",
  borderRadius: "100px", // Hace la forma de cápsula
  textAlign: "center",
  fontSize: "17px",
  fontWeight: "500",
  lineHeight: "1.4",
  margin: "20px auto",
  maxWidth: "600px",
};