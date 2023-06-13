import React, {useState} from "react";
import {ButtonGroup, Button} from '@material-ui/core'
import './App.css';
function App() {
  return (
    <div classname="App">
      <h1>React Material UI | ButtonGroup</h1>
      <ButtonGroup
      orientation="vertical"
      varient="outlined" color="primary">

        <Button>one</Button>
        <Button>Two</Button>
        <Button>Three</Button>
        <Button>Four</Button>
      </ButtonGroup>
    </div>
  )
}
{/* hiii*/}

export default App;

