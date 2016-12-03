import React, {Component} from 'react';

import Clock from './Clock';
import Controls from './Controls'

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            status: 'stopped'
        };
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
    }

    handleStateChange(nextStatus) {
        this.setState({
            status: nextStatus
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.status !== prevState.status) {
            switch (this.state.status) {
                case 'started':
                    this.handleStart();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0 
                    });
                case 'paused':
                    clearInterval(this.timer);
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    handleStart() {
        this.timer = setInterval(() => {
            const newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h1 className="text-center">计时器</h1>
                        <Clock count={this.state.count}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <Controls status={this.state.status} onStatusChange={this.handleStateChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;