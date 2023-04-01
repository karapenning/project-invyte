import React from "react";
import { Button, TextField } from '@mui/material';
import logo from '../../logo-icon.png';
import './EntryPage.css';

const EntryPage = () => {
    const [roomCode, setRoomCode] = React.useState('');

    return (
      <div className="EntryPage">
        <div className="roomCodeInput">
            <TextField id="roomCodeInput" label="Enter Room Code Here" variant="outlined" />
        </div>
        <div>
            <Button id="" variant="contained">Start a New Room</Button>
        </div>
      </div>
    );
};

export default EntryPage;