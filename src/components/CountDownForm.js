import React, {Component} from 'react';

class CountDownForm extends Component {
    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const strSeconds = this.inputSeconds.value;
        if (strSeconds.match(/^[0-9]*$/)) {
            this.inputSeconds.value = '';
            this.props.onSetCountDown(parseInt(strSeconds, 10));
        } else {
            alert("请输入数字！");
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form 
                        onSubmit={this.onSubmit}
                    >
                        <div className="form-group">
                            <input type="text" ref={input => this.inputSeconds = input} className="form-control" placeholder="Enter time in seconds" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Start</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CountDownForm;