import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={{ padding: 20 }}>EduHub is running 🚀</div>} />
      </Routes>
    </BrowserRouter>
  );
}
