import React from 'react';
import { useState } from 'react';
import { 
    Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, TextField
} from '@mui/material';
import './Board.css';

import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'roomID',
    headerName: 'Room ID',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title of Event',
    width: 150,
    editable: true,
  },
  {
    field: 'multiDay',
    headerName: 'Multi-Day',
    type: 'boolean',
    width: 110,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Addresss',
    description: 'This column is the location of event',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

var rows = [
  { id: 1, roomID: 'test', title: 'skyler bo byler', multiDay: true }
];



const CosmosClient = require('@azure/cosmos').CosmosClient
const config = require('./configDB.js')
//const url = require('url')
const endpoint = config.endpoint
const key = config.key
const databaseId = config.database.id
const containerId = config.container.id

const options = {
  endpoint: endpoint,
  key: key,
  userAgentSuffix: 'CosmosDBJavascriptQuickstart'
};

const client = new CosmosClient(options)

type BoardProps = {
    boardId: string;
};

export interface ClientEvent {
    id: string;
    title: string;
    address?: string;
    multiDay?: boolean;
    dateStart?: Date;
    dateEnd?: Date;
}

export const Admin_Board= ({ boardId }: BoardProps) => {
    const [clientEvent, setClientEvent] = useState<ClientEvent>({id: boardId, title: '', multiDay: false});
    
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
    
     function ReadDB () {
        if (!!boardId || boardId === 'na') {
            //create new id here
        }
        
        
       let x =  readContainer();

       populateRows(x);
    }
    async function readContainer() {
        const { resource: containerDefinition } = await client
          .database(databaseId)
          .container(containerId)
          .read()
        console.log(`Reading container:\n${containerDefinition.id}\n`)
      }
      function populateRows(dataFromContainer: any){

        rows.push(
            { id: 2, roomID: 'test2', title: 'fe fi no liar', multiDay: false });
    
      }

    async function createFamilyItem(itemBody: any) {
        const { item } = await client
          .database(databaseId)
          .container(containerId)
          .items.upsert(itemBody)
      }

    return (
        <Paper className='Board'>
            <Card>
                <CardContent>
                <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
                    <div>
                    <TextField
                        id='title'
                        variant="outlined"
                        label="Event Name"
                        value={clientEvent.title}
                        onChange={(e)=>onInputChange('title', e.target.value)}
                        required
                    />
                    </div>
                    <div>
                        <TextField
                            id='address'
                            variant="outlined"
                            label="Address"
                            value={clientEvent.address}
                            onChange={(e)=>onInputChange('address', e.target.value)}
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
                            <RadioGroup row defaultValue={false} onChange={(e)=>onInputChange('multiDay', e.target.value)}>
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
                                <p>{sampleEvent.dateStart.toDateString()} - {sampleEvent.dateEnd.toDateString()}</p>
                            </>
                        ) : (
                            <>
                                <p>{sampleEvent.dateStart.toDateString()}</p>
                                <p>{sampleEvent.dateStart.toLocaleTimeString()} - {sampleEvent.dateEnd.toLocaleTimeString()}</p>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
            <Button onClick={ReadDB}>Save to DB</Button>
        </Paper>
    );
}

