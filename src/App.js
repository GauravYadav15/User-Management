import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
    </Routes>
  );
}

export default App;
