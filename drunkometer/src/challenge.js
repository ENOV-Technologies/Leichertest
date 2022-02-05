import React, { Component } from 'react';

class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = { completed: false, hastimer: false }
        this.text = this.props.text;
    }

    render() {
        return (
            <div>
                <h2>{this.props.text}</h2>
                {this.state.hastimer === true && 
                    <Timer />
                }
            </div>
        );
    }

}

export default Challenge;