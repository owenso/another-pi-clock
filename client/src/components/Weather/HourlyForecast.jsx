import React, {Component, PropTypes} from 'react';
import HourlyEntry from './HourlyEntry.jsx'

class HourlyForecast extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}



	render() {
        const hoursToReturn = 12;
        const hours = this.props.data.slice(0,hoursToReturn).map((hour)=>{
            return <HourlyEntry 
            key={hour.time}
            time={hour.time}
            summary={hour.summary}
            icon={hour.icon}
            temperature={hour.temperature}
            apparentTemperature={hour.apparentTemperature}
            precipProbability={hour.precipProbability}
            precipIntensity={hour.precipIntensity}
            />
        })
        return (
            <div className="hourly-forecast col-sm-9">
                <h4>{this.props.summary}</h4>
                {hours}
            </div>
        )
	}
}

export default HourlyForecast;