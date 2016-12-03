import React, {Component} from 'react';

import Clock from './Clock';
import CountDownForm from './CountDownForm';
import Controls from './Controls';

class CountDown extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            status: 'stopped'
        }
        this.handleSetCountDown = this.handleSetCountDown.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleStatusChange(newStaus) {
        this.setState({
            status: newStaus
        })
    }

    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
            if (newCount === 0) {
                this.setState({
                    status: 'stopped'
                });
            } 
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.status !== prevState.status) {
            switch (this.state.status) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = null;
                    break;
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    handleSetCountDown(totalSeconds) {
        this.setState({
            count: totalSeconds,
            status: 'started'
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h1 className="text-center">倒计时</h1>
                        <Clock count={this.state.count} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        {this.state.status === 'stopped' 
                            ? 
                        <CountDownForm onSetCountDown={this.handleSetCountDown} />
                            :
                        <Controls status={this.state.status} onStatusChange={this.handleStatusChange} />
                        }
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CountDown;