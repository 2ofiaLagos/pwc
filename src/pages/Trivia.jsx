import { useState } from "react";

const preguntas = [
  {
    pregunta: "¿Los mensajes de tu jefe fuera del horario laboral comentando tu apariencia constituyen hostigamiento sexual laboral?",
    opciones: ["A) Sí, siempre", "B) No, porque es fuera del trabajo", "C) Solo si se repiten varias veces"],
    correcta: 0
  },
  {
    pregunta: "Si tu jefe te asigna tareas difíciles porque no respondiste sus mensajes personales, ¿eso forma parte del hostigamiento?",
    opciones: ["A) No, es una decisión laboral normal", "B) Sí, es una represalia y agrava el hostigamiento", "C) Solo si lo hace más de una vez"],
    correcta: 1
  },
  {
    pregunta: "Un compañero manda memes con contenido sexual al grupo del trabajo. ¿Es hostigamiento aunque diga que es un chiste?",
    opciones: ["A) No, si era una broma no cuenta", "B) Depende de si alguien se queja", "C) Sí, el contenido sexual no deseado siempre está tipificado"],
    correcta: 2 
  },
  {
    pregunta: "Tu compañera te dice que los memes le incomodan y él responde 'no seas tan sensible'. ¿Eso es parte del hostigamiento?",
    opciones: ["A) No, solo es una opinión", "B) Sí, invalidar la incomodidad de la víctima refuerza el hostigamiento", "C) Depende del tipo de meme"],
    correcta: 1 
  },
  {
    pregunta: "Tu supervisor abraza a todas sus colaboradoras al llegar. A algunas no les molesta pero a otras sí. ¿Es hostigamiento?",
    opciones: ["A) No, porque lo hace con todas por igual", "B) Solo si alguien se queja formalmente", "C) Sí, el contacto físico no solicitado puede ser hostigamiento"],
    correcta: 2 
  },
  {
    pregunta: "Nadie ha dicho nada sobre los abrazos por miedo a represalias. ¿El silencio significa que no hay hostigamiento?",
    opciones: ["A) Sí, si nadie se queja no hay problema", "B) No, el silencio por miedo no es consentimiento", "C) Depende de cuánto tiempo lleva pasando"],
    correcta: 1 
  },
  {
    pregunta: "En una reunión el gerente le dice a María 'con esa sonrisa consigues cualquier cliente'. ¿Es hostigamiento?",
    opciones: ["A) No, es un cumplido profesional", "B) Sí, reducir el valor profesional al físico es una conducta tipificada", "C) Solo si María se siente mal"],
    correcta: 1 
  },
  {
    pregunta: "¿El hecho de que el comentario sea en público frente a colegas lo hace menos grave?",
    opciones: ["A) Sí, en público no puede ser hostigamiento", "B) No cambia nada, el hostigamiento ocurre en público o en privado", "C) Depende de la reacción de los colegas"],
    correcta: 1
  },
  {
    pregunta: "Jorge le da palmadas en el hombro a Luis como gesto de amistad y a Luis no le molesta. ¿Es hostigamiento?",
    opciones: ["A) Sí, cualquier contacto físico es hostigamiento", "B) No, el contacto aceptado entre pares sin connotación sexual no lo es", "C) Depende de la frecuencia"],
    correcta: 1 
  },
  {
    pregunta: "Luis le dice a Jorge que ya no quiere ese contacto pero Jorge continúa. ¿Cambia la situación?",
    opciones: ["A) No, si antes era aceptado no puede cambiar", "B) Solo cambia si hay testigos", "C) Sí, ignorar el límite expresado puede constituir hostigamiento"],
    correcta: 2
  }
];

export default function Trivia() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const responder = (index) => {
    if (index === preguntas[i].correcta) {
      setScore(score + 1);
    }
    
    if (i + 1 < preguntas.length) {
      setI(i + 1);
    } else {
      setMostrarResultado(true);
    }
  };

  if (mostrarResultado) {
    return (
      <div style={container}>
        <div style={box}>
          <h2 style={finalTitle}>¡Trivia Finalizada!</h2>
          <div style={scoreCircle}>
            <span style={scoreText}>{score}</span>
            <span style={totalText}>/ {preguntas.length}</span>
          </div>
          <p style={feedbackText}>
            {score > 7 ? "¡Excelente! Conoces muy bien tus derechos." : "Sigue informándote para construir un ambiente seguro."}
          </p>
          <button style={retryBtn} onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </div>
    );
  }

  return (
    <div style={container}>
      <div style={box}>
        <p style={progressText}>Pregunta {i + 1} de {preguntas.length}</p>
        <h2 style={preguntaTitle}>{preguntas[i].pregunta}</h2>

        <div style={optionsContainer}>
          {preguntas[i].opciones.map((op, index) => (
            <button key={index} style={capsuleBtn} onClick={() => responder(index)}>
              {op}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}



const container = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#fcfcfc",
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px 20px"
};

const box = {
  maxWidth: "700px",
  width: "100%",
  background: "white",
  padding: "60px 50px",
  borderRadius: "30px", // Bordes muy redondeados
  textAlign: "center",
  boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
  border: "1px solid #f0f0f0"
};

const progressText = {
  color: "#D04A02",
  fontWeight: "bold",
  fontSize: "14px",
  textTransform: "uppercase",
  marginBottom: "20px",
  letterSpacing: "1px"
};

const preguntaTitle = {
  fontSize: "24px",
  fontFamily: "Georgia, serif",
  lineHeight: "1.4",
  color: "#2d2d2d",
  marginBottom: "40px"
};

const optionsContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};


const capsuleBtn = {
  width: "100%",
  padding: "18px 25px",
  backgroundColor: "white",
  border: "1px solid #707070",
  borderRadius: "35px",
  cursor: "pointer",
  fontSize: "16px",
  color: "#333",
  textAlign: "left",
  transition: "all 0.2s ease",
  fontWeight: "500"
};


const finalTitle = { fontSize: "30px", marginBottom: "20px", fontFamily: "Georgia, serif" };
const scoreCircle = {
  margin: "30px auto",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  backgroundColor: "#f9f9f9",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "5px solid #D04A02"
};

const scoreText = { fontSize: "40px", fontWeight: "bold", color: "#D04A02" };
const totalText = { fontSize: "20px", color: "#666", marginLeft: "5px" };
const feedbackText = { fontSize: "16px", color: "#555", marginBottom: "30px" };

const retryBtn = {
  padding: "12px 40px",
  backgroundColor: "#D04A02",
  color: "white",
  border: "none",
  borderRadius: "30px",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px"
};