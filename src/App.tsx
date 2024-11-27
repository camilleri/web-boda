import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import "./App.css";
import Home from "./Home";
import FormPage from "./FormPage";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
