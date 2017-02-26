import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import WeatherIcon from './WeatherIcon.jsx';

class TodaysWeather extends Component {
	constructor(props) {
		super(props);
        this.state = {
            rainAt:null
        }
	}

	componentDidMount() {
        this.timeTilRain();

	}
    componentDidUpdate(){
        if (this.state.rainAt){
        const here = this;
        const intervalId = setInterval(()=>{here.calcRainAt()}, 1000 * 60)
        this.setState({intervalId:intervalId})
        } else {
            if (this.state.intervalId) {
                clearInterval(this.state.intervalId);
                this.setState({intervalId:null})
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    calcRainAt(){
        this.setState({rainIn:this.state.rainAt.diff(moment(), 'minutes')});
    }

    timeTilRain(){
        const {nextHourDataArray} = this.props;
        if (nextHourDataArray){
            this.setState({rainAt:null})
            for (var i = 0; i < nextHourDataArray.length; i++) {
                if (nextHourDataArray[0].precipProbability > 0.1) {
                    break;
                } else if (nextHourDataArray[i].precipProbability > 0.1) {
                    this.setState({rainAt:moment.unix(nextHourDataArray[1].time)})
                    break;
                }
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
                <h5>{this.state.rainInc ? this.state.rainIn: this.props.currentSummary}</h5>
            </div>
        )
	}
}

export default TodaysWeather;