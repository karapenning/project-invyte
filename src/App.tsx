import React from 'react';
import { useState } from 'react';
import logo from './logo-icon.png';
import './App.css';
import { Button } from '@mui/material';
// import NavPage from './components/NavPage/NavPage';
import { Board } from './components/Board/Board';
import { New_Board } from './components/Board_New/Board';
import { get } from 'http';
import { randomInt } from 'crypto';
import { create } from 'domain';
var randomstring = require("randomstring");
const CosmosClient = require('@azure/cosmos').CosmosClient

const config = require('./configDB.js')
//const url = require('url')
const endpoint = config.endpoint
const key = config.key

const options = {
  endpoint: endpoint,
  key: key,
  userAgentSuffix: 'CosmosDBJavascriptQuickstart'
};


const databaseId = config.database.id
const containerId = config.container.id
const partitionKey = { kind: 'Hash', paths: ['/Country'] }
const client = new CosmosClient(options)


async function readDatabase() {
  
  const { resource: databaseDefinition } = await client
    .database(databaseId)
    .read()
  console.log(`Reading database:\n${databaseDefinition.id}\n`)
}

function App() {
  const [boardId, setBoardId] = useState<string>("NA");
  
  async function createDatabase(dbid: string) {
    const { database } = await client.databases.createIfNotExists({
      id: dbid
    })
    console.log(`Created database:\n${database.id}\n`)
  }
  async function createFamilyItem(itemBody: string, containerId: any) {
    const { item } = await client
      .database(databaseId)
      .container(containerId)
      .items.upsert(itemBody)
  }
  // onclick "Create Board" 
  const createBoardClicked = () => {
    // ADD IN DB -- generate & set new boardId

  
    let  dbid : string = randomstring.generate();
    const itembody ='{id:"Heyo","Partydetails": {"PartyName": "skylers baptism","Address": "2635 Margarette Ave"}}'
    
    createFamilyItem(itembody,dbid);



    setBoardId(dbid);
  };

  return (
    <div className="App">
      <header className={(!boardId || boardId === "NA") ? "App-header-large" : "App-header-small"}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        {(!boardId || boardId === "NA") ? (
          <Button id="" variant="contained" onClick={createBoardClicked}>Create Board</Button>
        ) : (
          <New_Board boardId={boardId}/>
        )}
      </div>
    </div>
  );
}

export default App;