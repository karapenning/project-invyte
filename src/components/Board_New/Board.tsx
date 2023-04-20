import React from 'react';
import { Button, Card, Divider, Paper, TextField } from '@mui/material';
import './Board.css';

type BoardProps = {
    boardId: string;
};

export interface Event {
    title: string;
    address?: string;
    multiDay?: boolean;
    dateStart?: Date;
    dateEnd?: Date;
}

const sampleEvent = {
    title: "Dinner Party at Abby's",
    address: "1516 Strawberry Lane",
    multiDay: false,
    dateStart: new Date('April 13, 2022 19:30:00'),
    dateEnd: new Date('April 13, 2022 22:30:00'),
}

export const New_Board = ({ boardId }: BoardProps) => (
    <Paper className='Board'>
        <div className="Board-main">
        <TextField  helperText="Input your Event Title" required value={sampleEvent.title}  variant='standard' > </TextField>
            <Divider />
            <Card>
                <div>
                    <b>Address</b>
                    <p>{sampleEvent.address}</p>
                </div>
                <div>
                    <b>ID</b>
                    <p>{boardId}</p>
                </div>
                <div>
                    {sampleEvent.multiDay === true ? (
                        <>
                            <b>Dates</b>
                            <p>{sampleEvent.dateStart.toDateString()} - {sampleEvent.dateEnd.toDateString()}</p>
                        </>
                    ) : (
                        <>
                            <b>Date</b>
                            <p>{sampleEvent.dateStart.toDateString()}</p>
                            <p>{sampleEvent.dateStart.toLocaleTimeString()} - {sampleEvent.dateEnd.toLocaleTimeString()}</p>
                        </>
                    )}
                </div>
            </Card>
        </div>
        <Button onClick={() => {SavetoDb();}}>Save to DB</Button>
    </Paper>
)


function SavetoDb() {
   


}

