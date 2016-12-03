import React from 'react';

const Controls = ({status, onStatusChange}) => {
    return (
        <div>
            {
                status !== 'started'
                ?
                <button type="button" className="btn btn-primary btn-block" onClick={() => {onStatusChange("started")}}>开始</button>
                :
                <button type="button" className="btn btn-default btn-block" onClick={() => {onStatusChange("paused")}}>暂停</button>
            }
            <button type="button" className="btn btn-danger btn-block" onClick={() => {onStatusChange("stopped")}}>清除</button>
        </div>
    );
};

export default Controls;