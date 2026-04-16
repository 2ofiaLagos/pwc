import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Trivia from "./pages/Trivia";
import Guia from "./pages/Guia";
import Leyes from "./pages/Leyes";
import Denuncia from "./pages/Denuncia";
import Footer from "./components/Footer";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 40px",
  backgroundColor: "#1E1E1E",
  color: "white",
  alignItems: "center"
};

const linkStyle = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none"
};


const appStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh"
};

const contentStyle = {
  flex: 1
};

function Navbar() {
  return (
    <div style={navStyle}>
      <h2 style={{ color: "#FF6F00" }}>PwC</h2>
      <div>
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/trivia" style={linkStyle}>Trivia</Link>
        <Link to="/guia" style={linkStyle}>Guía</Link>
        <Link to="/leyes" style={linkStyle}>Leyes</Link>
        <Link to="/denuncia" style={linkStyle}>Denuncia</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={appStyle}>
        <Navbar />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/guia" element={<Guia />} />
            <Route path="/leyes" element={<Leyes />} />
            <Route path="/denuncia" element={<Denuncia />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}