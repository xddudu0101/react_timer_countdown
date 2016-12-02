import React, {Component, PropTypes} from 'react';

class Clock extends Component {
    static defaultProps = {
        totalSeconds: 0
    }

    static propTypes = {
        totalSeconds: PropTypes.number.isRequired
    }

    formatSeconds(totalSeconds) {
        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return `${minutes}:${seconds}`;
    }

    render() {
        const { totalSeconds } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="clock">
                        <span className="clock-text" ref={span => this.clockText = span} >
                        {
                            this.formatSeconds(totalSeconds)
                        }
                        </span> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Clock;