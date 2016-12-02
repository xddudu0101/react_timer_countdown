import React, {Component} from 'react';

import Clock from './Clock';
import CountDownForm from './CountDownForm';

class CountDown extends Component {
    constructor() {
        super();
        this.state = {
            totalSeconds: 0
        }
        this.handleSetCountDown = this.handleSetCountDown.bind(this);
    }

    handleSetCountDown(totalSeconds) {
        this.setState({
            totalSeconds
        });
    }

    render() {
        return (
            <div className="container">
                <Clock totalSeconds={this.state.totalSeconds} />
                <CountDownForm onSetCountDown={this.handleSetCountDown} />
            </div>
        );
    }
}

export default CountDown;