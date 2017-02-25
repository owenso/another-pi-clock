import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import WeatherIcon from './WeatherIcon.jsx';

class DayWeather extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

	render() {
        return (
            <div className="other-weather">
                <h3>{moment.unix(this.props.timestamp).format('ddd')}</h3>
                <WeatherIcon
                currentSummary={this.props.summary}
                currentIcon={this.props.icon}
                sunriseTime={this.props.sunriseTime}
                sunsetTime={this.props.sunsetTime}
                />
                <h4>H:{Math.round(this.props.high)}&deg;F&nbsp;</h4>
                <br />
                <h4>L:{Math.round(this.props.low)}&deg;F</h4>
                <h5>{this.props.summary}</h5>
            </div>
        )
	}
}

export default DayWeather;