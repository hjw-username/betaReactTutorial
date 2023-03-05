import React from "react";
import QucikStartTir from "./components/quickStartTiR/QucikStartTir";
import TicTacToe from "./components/ticTacToe/ticTacToe";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <TicTacToe /> */}
      <QucikStartTir />
    </div>
  );
};

export default App;