import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: 200, padding: 20, background: "#111", height: "100vh", color: "white" }}>
      <h2>EduHub</h2>

      <div style={{ marginTop: 20 }}>
        <Link to="/" style={{ display: "block", marginBottom: 10 }}>Login</Link>
        <Link to="/dashboard" style={{ display: "block", marginBottom: 10 }}>Dashboard</Link>
      </div>
    </div>
  );
}
