import React from 'react';

const formatSeconds = function(count=0) {
    let seconds = count % 60;
    let minutes = Math.floor(count / 60);

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return `${minutes}:${seconds}`;
}

const Clock = ({count}) => {
    let clockText = null;
    return (
        <div className="clock">
            <span className="clock-text" ref={span => clockText = span}>
            {
                formatSeconds(count)
            }
            </span> 
        </div>
    );
};

export default Clock;