import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class Clock extends Component {
	render() {
        return (
            <div className="clock">
                <h1>{this.props.currentTime.format('h:mm A')}</h1>
                <h4>{this.props.currentTime.format('ddd D MMM')}</h4>
            </div>
            )
	}
}

export default Clock;