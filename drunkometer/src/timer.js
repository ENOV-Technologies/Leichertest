import React, { Component } from 'react';

class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            started: false,
            time: 30,
            finished: false
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown =  this.countDown.bind(this);
    }

    changeTime = (number)=>{
        if(number>60){
            this.setState({ time: 60 })
        }
        else if(number<0){
            this.setState({ time: 1 })
        }
        this.setState({time:number})
    }

    componentDidMount() {
        this.setState({ time: this.state.time });
    }

    startTimer(){
        if(this.timer == 0 && this.state.time >0){
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        let newTime = this.state.time-1;
        if(newTime == 0){
            clearInterval(this.timer);
        }
    }

    render(){
        return (
            <div>
                <h3>this.state.time</h3>
                <button onClick={this.startTimer}>Start</button>
            </div>
        );
    }

}

export default Timer;