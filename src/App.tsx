import React from 'react';
import { useState } from 'react';
import logo from './logo-icon.png';
import './App.css';
import { Button } from '@mui/material';
// import NavPage from './components/NavPage/NavPage';
import { Board } from './components/Board/Board';

function App() {
  const [boardId, setBoardId] = useState<number>(-1);

  // onclick "Create Board" 
  const createBoardClicked = () => {
    // ADD IN DB -- generate & set new boardId
    setBoardId(1);
  };

  return (
    <div className="App">
      <header className={(!boardId || boardId < 1) ? "App-header-large" : "App-header-small"}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        {(!boardId || boardId < 1) ? (
          <Button id="" variant="contained" onClick={createBoardClicked}>Create Board</Button>
        ) : (
          <Board boardId={boardId}/>
        )}
      </div>
    </div>
  );
}

export default App;