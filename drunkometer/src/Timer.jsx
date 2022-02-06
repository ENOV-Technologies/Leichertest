import React from 'react';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.timelimit = this.props.timelimit;
        this.state = { time: 0,};
    }

    onStart=()=>{
        this.setState({time:this.state.time+1});
    }

    timer=()=>{
        this.temp = setInterval(this.onStart,1000);
        document.getElementById('timerbtn').disabled=true;
    }

    onPause=()=>{
        clearInterval(this.temp);
    }

    onReset=()=>{
        clearInterval(this.temp);
        document.getElementById('timerbtn').disabled = false;
        this.setState({time:0});
    }

    render(){
        return (
            <>
                {this.state.time >= this.props.timelimit ? <h3>Times Up</h3>
                : <h3>{this.state.time}</h3>
                }
                <div className="btn-group time-controls" role="group" >
                    <button className="btn btn-success" id='timerbtn' onClick={this.timer}>Start</button>
                    <button className="btn btn-danger" onClick={this.onPause}>Stop</button>
                    <button className="btn btn-info" onClick={this.onReset}>Reset</button>
                </div>
                <br/>
            </>
        );
    }

}

export default Timer;