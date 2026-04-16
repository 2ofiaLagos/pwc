import React from 'react';

const Footer = () => {
  // Estilos en objeto CSS
  const styles = {
    footer: {
      backgroundColor: '#1a3a3f',
      color: 'white',
      width: '100%'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 50px 30px 50px'
    },
    columns: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '40px',
      marginBottom: '40px'
    },
    col: {
      flex: 1,
      minWidth: '160px'
    },
    colTitle: {
      fontSize: '16px',
      fontWeight: '600',
      marginBottom: '20px',
      letterSpacing: '0.5px',
      color: 'white'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      marginBottom: '12px'
    },
    link: {
      color: '#d0d0d0',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    },
    linkHover: {
      color: '#ffd966',
      textDecoration: 'underline'
    },
    divider: {
      borderTop: '1px solid #2e5a60',
      margin: '20px 0 25px 0'
    },
    bottom: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '15px',
      fontSize: '13px',
      color: '#b0c4c9',
      paddingTop: '5px'
    },
    copyright: {
      fontSize: '12px'
    },
    tagline: {
      fontSize: '13px',
      fontStyle: 'italic',
      letterSpacing: '0.3px'
    },
    taglineStrong: {
      color: '#ffd966',
      fontWeight: 'normal'
    }
  };

  // Manejador para hover en los enlaces
  const handleMouseEnter = (e) => {
    e.target.style.color = styles.linkHover.color;
    e.target.style.textDecoration = styles.linkHover.textDecoration;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = styles.link.color;
    e.target.style.textDecoration = styles.link.textDecoration;
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Columnas de navegación */}
        <div style={styles.columns}>
          {/* Columna 1: Navegación */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Navegación</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="/" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Inicio</a></li>
              <li style={styles.listItem}><a href="/trivia" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Trivia</a></li>
              <li style={styles.listItem}><a href="/guia-accion" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Guía de acción</a></li>
              <li style={styles.listItem}><a href="/leyes" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Leyes</a></li>
              <li style={styles.listItem}><a href="/denuncia" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Denuncia</a></li>
            </ul>
          </div>

          {/* Columna 2: Sobre el proyecto */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Sobre el proyecto</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="/acerca" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Acerca de este micrositio</a></li>
              <li style={styles.listItem}><a href="/que-es-hostigamiento" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>¿Qué es el hostigamiento?</a></li>
              <li style={styles.listItem}><a href="/politica-confidencialidad" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Política de confidencialidad</a></li>
            </ul>
          </div>

          {/* Columna 3: Recursos legales */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Recursos legales</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="/ley-27942" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Ley N° 27942</a></li>
              <li style={styles.listItem}><a href="/reglamento" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Reglamento vigente</a></li>
              <li style={styles.listItem}><a href="/derechos-colaborador" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Derechos del colaborador</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto PwC */}
          <div style={styles.col}>
            <h4 style={styles.colTitle}>Contacto PwC</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}><a href="/canal-denuncias" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Canal de denuncias oficial</a></li>
              <li style={styles.listItem}><a href="/rrhh" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Área de Recursos Humanos</a></li>
              <li style={styles.listItem}><a href="/etica" style={styles.link} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Ética y Cumplimiento</a></li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div style={styles.divider}></div>

        {/* Parte inferior */}
        <div style={styles.bottom}>
          <div style={styles.copyright}>
            © 2025 Micrositio desarrollado para PwC Perú — Hackathon +ChicasTec
          </div>
          <div style={styles.tagline}>
            "El silencio no protege, <strong style={styles.taglineStrong}>el conocimiento sí</strong>."
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;