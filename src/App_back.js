import React from "react";
import "./App.css";
import {Button} from './common';
export default () => {
 const log = () => {
    console.log( `log this text`);
  }
   return (
    <div className="App">
      <header className="App-header">
        <h2>This is App Page</h2>
        <Button onClick={log}/>
      </header>
    </div>
  );
};
