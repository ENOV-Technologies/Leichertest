import React from 'react';
import Timer from './Timer'

class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.text = this.props.text;
        this.hastimer = this.props.hastimer;
        this.timelimit = this.props.timelimit;
    }

    render() {
        return (
            <div>
                <h2>{this.props.text}</h2>
                {this.props.hastimer === true && 
                    <Timer timelimit={this.props.timelimit} timer={0}/>
                }
            </div>
        );
    }

}

export default Challenge;