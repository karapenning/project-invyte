import React from "react";
import { Button, TextField } from '@mui/material';
import logo from '../../logo-icon.png';
import './App.css';
import EntryPage from '../EntryPage/EntryPage';

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
        </header>
        <EntryPage />
      </div>
    );
  }
}