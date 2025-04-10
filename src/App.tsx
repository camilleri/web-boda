import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Header } from "./Header";
import "./App.css";
import Home from "./Home";
import FormPage from "./FormPage";
import { useRef } from "react";
import AdminPage from "./AdminPage";

function App() {
  // Create refs for scrolling
  const homeRef = useRef(null);
  const venueRef = useRef(null);
  const transportRef = useRef(null);
  const timelineRef = useRef(null);
  const accommodationRef = useRef(null);
  const formRef = useRef(null);
  const supportRef = useRef(null);
  const musicRef = useRef(null);
  const picsRef = useRef(null);

  return (
    <Router>
      <Header
        homeRef={homeRef}
        venueRef={venueRef}
        transportRef={transportRef}
        timelineRef={timelineRef}
        accommodationRef={accommodationRef}
        formRef={formRef}
        supportRef={supportRef}
        musicRef={musicRef}
        picsRef={picsRef}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeRef={homeRef}
              venueRef={venueRef}
              transportRef={transportRef}
              timelineRef={timelineRef}
              accommodationRef={accommodationRef}
              formRef={formRef}
              supportRef={supportRef}
              musicRef={musicRef}
              picsRef={picsRef}
            />
          }
        />
        <Route path="/form" element={<FormPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
