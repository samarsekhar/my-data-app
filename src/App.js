import React from "react";
import AppBar from "./Components/AppBar/AppBar";
import BoardBar from "./Components/BoardBar/BoardBar";
import BoardContent from "./Components/BoardContent/BoardContent";

function App() {
  return (
    <div className="trello-master">
      <AppBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
