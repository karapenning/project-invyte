import React from "react";
import logo from '../../logo-icon.png';
import { Button } from '@mui/material';
import './App.css';
import EntryPage from '../EntryPage/EntryPage';
import RoomPage from '../RoomPage/RoomPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHost: false,
      roomCode: null,
      isRoom: false,
    };
  }

  handleClick = () => {
    this.setState({
      isRoom: true,
    });
  };

  render() {
    let content;
    if (this.state.isRoom === true) {
      content = <RoomPage />;
    } else {
      content = (
        <>
          <EntryPage />
          <div>
            <Button id="" variant="contained" onClick={this.handleClick}>Create Room</Button>
          </div>
        </>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {content}
      </div>
  );
  }
}