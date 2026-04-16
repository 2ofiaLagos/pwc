import React from "react";

export default function DenunciaFinal() {
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#fcfcfc",
      minHeight: "100vh",
      padding: "60px 5%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
      maxWidth: "600px"
    },
    title: {
      fontSize: "32px",
      fontFamily: "Georgia, serif",
      fontWeight: "bold",
      color: "#2d2d2d",
      marginBottom: "10px"
    },
    formCard: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "600px",
      padding: "45px",
      borderRadius: "12px",
      boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
      borderTop: "6px solid #D04A02"
    },
    infoBox: {
      backgroundColor: "#FFF9E6",
      padding: "15px 20px",
      borderRadius: "8px",
      fontSize: "13.5px",
      color: "#856404",
      border: "1px solid #ffeeba",
      marginBottom: "30px"
    },
    row: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px"
    },
    field: {
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column"
    },
    label: {
      fontSize: "14px",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#333"
    },
    input: {
      padding: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "15px",
      outline: "none"
    },
    textarea: {
      padding: "12px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "15px",
      height: "100px",
      resize: "none"
    },
    submitBtn: {
      width: "100%",
      padding: "16px",
      backgroundColor: "#D04A02",
      color: "white",
      border: "none",
      borderRadius: "30px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      marginTop: "10px"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Nueva Denuncia</h1>
        <p style={{ color: "#666", fontSize: "15px" }}>
          Su reporte será procesado con total confidencialidad.
        </p>
      </div>

      <div style={styles.formCard}>
        <div style={styles.infoBox}>
          <strong>Aviso de sistema:</strong> Al enviar este formulario, recibirá 
          por correo un <strong>usuario automático</strong> para dar seguimiento al caso.
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Modalidad</label>
          <select style={styles.input}>
            <option>Anónimo (Protección contra represalias)</option>
            <option>Identificado</option>
          </select>
        </div>

        <div style={styles.row}>
          <div style={styles.field}>
            <label style={styles.label}>Línea de Servicio</label>
            <input style={styles.input} placeholder="Ej: Auditoría" />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Cargo</label>
            <input style={styles.input} placeholder="Tu posición" />
          </div>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Área del Incidente</label>
          <input style={styles.input} placeholder="¿Dónde ocurrió?" />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Descripción de los hechos</label>
          <textarea 
            style={styles.textarea} 
            placeholder="Describe lo sucedido con el mayor detalle posible..."
          />
        </div>

        <button style={styles.submitBtn}>
          Enviar Reporte y Crear Usuario
        </button>
      </div>
    </div>
  );
}