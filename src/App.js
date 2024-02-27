import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Layout from "./components/Layout";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      <Route path="/project" element={<Project />} />

      </Route>
    </Routes>
  );
}

export default App;
