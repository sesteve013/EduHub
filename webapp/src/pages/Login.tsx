import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Login Page</h1>

      <Link to="/dashboard">
        Go to Dashboard →
      </Link>
    </div>
  );
}
