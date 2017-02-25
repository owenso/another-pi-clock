import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class Clock extends Component {
	constructor(props) {
		super(props);
        this.state = {
            currentTime:moment()
        }
	}

	componentWillMount() {
        this.ticTock()
	}

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    ticTock () {
        const clock = setInterval(()=>{this.setState({currentTime:moment()})}, 1000)
        this.setState({intervalId:clock});
    }
	render() {
        return (
            <div className="clock">
                <h1>{this.state.currentTime.format('h:mm A')}</h1>
                <h4>{this.state.currentTime.format('ddd D MMM')}</h4>
            </div>
            )
	}
}

export default Clock;