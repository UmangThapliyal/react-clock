import React from "react";

import styles from "./clock-style";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      time : new Date().toLocaleTimeString(),
      date : new Date().toDateString()
    };
  }
    
  updateClock() {
    this.setState({ 
      time : new Date().toLocaleTimeString(),
      date : new Date().toDateString()  
    }); 
  }
  
  componentDidMount() {
    if(this.interval) clearInterval(this.interval);
    this.interval = setInterval(() => this.updateClock(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={styles.outerDiv}>
        <div style={styles.clockDiv}>
          <center>{this.state.time}</center>
        </div>
        <span style={styles.spanDiv}>{this.state.date}</span>
      </div>
    )
  }
}

export default Clock;
