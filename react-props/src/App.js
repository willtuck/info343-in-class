import React, { Component } from 'react';
import './App.css';
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";

class App extends Component {
  handleButtonClick(){
    console.log("button added to the app was clicked!");
  }

  render() {

    let alerts = [
      {
        id: 1,
        message: "Alert Me",
        type: "primary"
      },
      {
        id: 2,
        message: "Zombie Attack Imminent",
        type: "danger"
      },
      {
        id: 3
      }
    ]

    return (
      <div className="container">
        {alerts.map(a =>
           <Alert 
            key={a.id} 
            message={a.message} 
            type={a.type}
        />)}
          
        <Card 
          title="Dubs" 
          imgsrc="dubs.jpg"
          imgalt="Dubs is the cutest!"
          width={300}>

            <p>This is my <strong>favorite</strong> mascot</p>
            <p>he is the cutest!</p>
            <Alert message="DUBS UP"/>

        </Card>
        
        <Button caption="Click Me!!!"
          onClick={() => this.handleButtonClick()}
        />

      </div>
    );
  }
}

export default App;
