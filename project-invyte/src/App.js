import React from "react";
import { Button, TextField } from '@mui/material';
import logo from './logo-icon.png';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHost: false,
      roomCode: null,
    };
  }

  handleClick = () => {
    this.setState({
      isHost: true,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Let's plan a party!
          </p>
          <TextField id="roomCodeInput" label="Enter Room Code Here" variant="outlined" />
          <Button id="" variant="contained">Start a New Room</Button>
        </header>
      </div>
    );
  }
}