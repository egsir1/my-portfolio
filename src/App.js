import "./index.css";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import ProjectsPage from "./routes/ProjectsPage";
import ContactPage from "./routes/ContactPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
