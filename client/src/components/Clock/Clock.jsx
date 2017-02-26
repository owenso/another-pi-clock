import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class Clock extends Component {
	render() {
        return (
            <div className="clock">
                <h1 className="pull-right">{this.props.currentTime.format('h:mm A')}</h1>
                <h2 className="pull-right">{this.props.currentTime.format('dddd D MMMM')}</h2>
            </div>
            )
	}
}

export default Clock;