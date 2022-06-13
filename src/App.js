import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Labs from "./Pages/Labs";
import Education from "./Pages/Education";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="labs" element={<Labs />} />
          <Route path="education" element={<Education />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);