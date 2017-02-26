import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import WeatherIcon from './WeatherIcon.jsx';

class HourlyEntry extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}



	render() {
        return (
            <div className="hourly-entry col-sm-6 ">
                <div className="col-sm-4 hourly-icon">
                    <WeatherIcon
                    currentSummary={this.props.summary}
                    currentIcon={this.props.icon}
                    />
                </div>
                <div className="col-sm-8 hourly-text">
                    <span>{moment.unix(this.props.time).format('h A')}</span>&nbsp;-&nbsp; 
                    <span>{Math.round(this.props.temperature)}&deg;F</span>
                </div>
            </div>
        )
	}
}

export default HourlyEntry;