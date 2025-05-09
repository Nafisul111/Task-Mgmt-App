import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import NoteContext from "./Ncontext/NoteContext";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  return (
    <NoteContext.Provider
      value={{ showModal, setShowModal, editTask, setEditTask }}
    >
      <Router>
        <Routes>
          <Route path="/" exact element={<Board />} />
        </Routes>
      </Router>
    </NoteContext.Provider>
  );
}

export default App;
