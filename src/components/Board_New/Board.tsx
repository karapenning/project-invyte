import React from 'react';
import { useState } from 'react';
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField } from '@mui/material';
import './Board.css';

type BoardProps = {
    boardId: string;
};

export interface ClientEvent {
    title: string;
    address?: string;
    multiDay?: boolean;
    dateStart?: Date;
    dateEnd?: Date;
}

export const New_Board = ({ boardId }: BoardProps) => {
    const [clientEvent, setClientEvent] = useState<ClientEvent>({title: '', multiDay: false});
    
    const sampleEvent = {
        title: "Dinner Party at Abby's",
        address: "1516 Strawberry Lane",
        multiDay: false,
        dateStart: new Date('April 13, 2022 19:30:00'),
        dateEnd: new Date('April 14, 2022 22:30:00'),
    }

    const onInputChange = (id: string, value: any) => {
        // let x = e;
        // let y = e.target;
        let x = value;
        setClientEvent({...clientEvent, [id]: value});
    }
    
    const clientEventDateTypeChanged = (e: React.FormEvent<HTMLInputElement>) => {
        //if (e && typeof e.target.value === "string") {
        //    if (e.target.value.toLowerCase() === "true")
        //        sampleEvent.multiDay = true;
        //    else 
        //        sampleEvent.multiDay = false;
        //}
        let x = e;
    };

    async function onSaveToDB () {
        if (!!boardId || boardId === 'na') {
            //create new id here
        }

        // send id and clientEvent to DB here
        // change this to format like --> const itembody ='{id:"Heyo","Partydetails": {"PartyName": "skylers baptism","Address": "2635 Margarette Ave"}}'
        
    }

    return (
        <Paper className='Board'>
            <Card>
                <CardContent>
                    <div>
                    <TextField
                        id='title'
                        variant="outlined"
                        label="Event Name"
                        value={clientEvent.title}
                        required
                        onChange={(e)=>onInputChange('title', e.target.value)}
                    />
                    </div>
                    <div>
                        <TextField
                            id='address'
                            variant="outlined"
                            label="Address"
                            value={clientEvent.address}
                        />
                    </div>
                    <div>
                        <TextField
                            variant="outlined"
                            label="ID"
                            value={boardId}
                            disabled
                        />
                    </div>
                    <div>
                        <FormControl>
                            <FormLabel>Event Type</FormLabel>
                            <RadioGroup row defaultValue={false} onChange={clientEventDateTypeChanged}>
                                <FormControlLabel value={false} label='Single Day' control={<Radio />}/>
                                <FormControlLabel value={true} label='Multiple Days' control={<Radio />}/>
                            </RadioGroup>
                        </FormControl>
                        {/* <div>
                            <TextField
                                variant="outlined"
                                label="Event Date"
                                type="date"
                                defaultValue={new Date().toLocaleString() + ""}
                                value={sampleEvent.dateStart.toDateString()}
                            />
                        </div> */}
                        {clientEvent && clientEvent.multiDay === true ? (
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
                </CardContent>
            </Card>
            <Button onClick={onSaveToDB}>Save to DB</Button>
        </Paper>
    );
}


function SavetoDb() {
   


}