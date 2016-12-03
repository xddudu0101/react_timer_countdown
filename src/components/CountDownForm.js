import React, {Component} from 'react';

class CountDownForm extends Component {
    constructor() {
        super()
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const strSeconds = this.inputSeconds.value;
        if (strSeconds) {
            if (strSeconds.match(/^[0-9]*$/)) {
                this.inputSeconds.value = '';
                this.props.onSetCountDown(parseInt(strSeconds, 10));
            } else {
                alert("请输入数字！");
            }
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input type="text" ref={input => this.inputSeconds = input} className="form-control" placeholder="输入秒数" required/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">开始</button>
            </form>
        );
    }
}

export default CountDownForm;