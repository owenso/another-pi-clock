import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import WeatherIcon from './WeatherIcon.jsx';

class TodaysWeather extends Component {
	constructor(props) {
		super(props);
        this.state = {
            rainInc:false
        }
	}

	componentWillMount() {
	}

    timeTilRain(){
        const {currentTime, nextHourDataArray} = this.props.nextHourDataArray;
        this.setState({rainInc:false})
        for (var i = 0; i < nextHourDataArray.length; i++) {
            if (nextHourDataArray[0].precipProbability > 0.1) {
                this.setState({rainInc: true, rainStatus:"Raining Now"})
                break;
            } else if (nextHourDataArray[i].precipProbability > 0.1) {
                this.setState({rainInc: true, rainStatus:"Rain in " + moment.unix(nextHourDataArray[i].time).diff(currentTime, 'minutes') + " minutes."})
                break;
            }
        }
    }

	render() {
        return (
            <div className="todays-weather">
                <WeatherIcon
                currentSummary={this.props.currentSummary}
                currentIcon={this.props.currentIcon}
                sunriseTime={this.props.sunriseTime}
                sunsetTime={this.props.sunsetTime}
                />
                <h1>{Math.round(this.props.currentTemperature)}&deg;F</h1>
                <br />
                <h5>{this.state.rainInc ? this.state.rainStatus : this.props.currentSummary}</h5>
            </div>
        )
	}
}

export default TodaysWeather;