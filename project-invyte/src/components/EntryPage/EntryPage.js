import React from "react";
import { Button, TextField } from '@mui/material';
import logo from '../../logo-icon.png';
import './EntryPage.css';
import QRImage from "react-qr-image";

const EntryPage = () => {
    const [roomCode, setRoomCode] = React.useState('');

    return (
      <div className="EntryPage">
        <div className="roomCodeInput">
            <TextField id="roomCodeInput" label="Create a new room" variant="outlined" />
        </div>
        <>
      <QRImage text="hello" />
      <QRImage text="hello" color="red" />
      <QRImage text="hello" color="white" background="#111" />
      <QRImage>hello</QRImage>
    </>
        <div>
            <Button id="CreateRoomBoi"   
            onClick={() => {


              var cryptoRandomString = "lksjdga;oi"


              alert(cryptoRandomString)
            }}            
            variant="contained">Start a New Room</Button>
        </div>
      </div>
      
    );
};





export default EntryPage;