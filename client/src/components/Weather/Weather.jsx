import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import moment from 'moment';
import SunriseSunset from './SunriseSunset.jsx';
import TodaysWeather from './TodaysWeather.jsx'
import DayWeather from './DayWeather.jsx';

class Weather extends Component {
	constructor(props) {
		super(props);
        this.state = {
        }
	}

	componentWillMount() {
        this.getLocation();
        const here = this;
        const intervalId = setInterval(()=>{here.getWeather()}, 1000 * 60 * 10)
        this.setState({intervalId:intervalId})
	}

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setLocation.bind(this));
        } else {
            console.error("Errything is broken.")
        }
    }
    setLocation(location){
        this.setState({
            latitude:location.coords.latitude,
            longitude:location.coords.longitude
        })
        this.getWeather();
    }
    getWeather() {
        console.log(moment().format('h:mm:ss'))
        axios.get(`/weather/${this.state.latitude}/${this.state.longitude}`)
        .then((result)=>{
            console.log('got weather')
            this.setState({
                currentSummary:result.data.currently.summary,
                currentIcon:result.data.currently.icon,
                currentTemperature:result.data.currently.temperature,
                currentFeelsLikeTemp:result.data.currently.apparentTemperature,
                sunriseTime:result.data.daily.data[0].sunriseTime,
                sunsetTime:result.data.daily.data[0].sunsetTime,
                todayHigh:result.data.daily.data[0].temperatureMax,
                todayHighTime:moment.unix(result.data.daily.data[0].temperatureMaxTime),
                todayLow:result.data.daily.data[0].temperatureMin,
                todayLowTime:moment.unix(result.data.daily.data[0].temperatureMinTime),
                todayFeelsLikeHigh:result.data.daily.data[0].apparentTemperatureMax,
                todayFeelsLikeLow:result.data.daily.data[0].apparentTemperatureMin,
                nextHourSummary:result.data.minutely.summary,
                nextHourDataArray:result.data.minutely.data,
                weekSummary:result.data.daily.summary,
                tomorrowSummary:result.data.daily.data[1].summary,
                tomorrowIcon:result.data.daily.data[1].icon,
                tomorrowPrecipType:result.data.daily.data[1].precipType,
                tomorrowPrecipProbability:result.data.daily.data[1].precipProbability,
                tomorrowHigh:result.data.daily.data[1].temperatureMax,
                tomorrowHighTime:moment.unix(result.data.daily.data[1].temperatureMaxTime),
                tomorrowLow:result.data.daily.data[1].temperatureMin,
                tomorrowLowTime:moment.unix(result.data.daily.data[1].temperatureMinTime),
                tomorrowFeelsLikeHigh:result.data.daily.data[1].apparentTemperatureMax,
                tomorrowFeelsLikeLow:result.data.daily.data[1].apparentTemperatureMin,
                tomorrowSunriseTime:result.data.daily.data[1].sunriseTime,
                tomorrowSunsetTime:result.data.daily.data[1].sunsetTime,
                tomorrowTimeStamp:result.data.daily.data[1].time,
                overmorrowSummary:result.data.daily.data[2].summary,
                overmorrowIcon:result.data.daily.data[2].icon,
                overmorrowPrecipType:result.data.daily.data[2].precipType,
                overmorrowPrecipProbability:result.data.daily.data[2].precipProbability,
                overmorrowHigh:result.data.daily.data[2].temperatureMax,
                overmorrowHighTime:moment.unix(result.data.daily.data[2].temperatureMaxTime),
                overmorrowLow:result.data.daily.data[2].temperatureMin,
                overmorrowLowTime:moment.unix(result.data.daily.data[2].temperatureMinTime),
                overmorrowFeelsLikeHigh:result.data.daily.data[2].apparentTemperatureMax,
                overmorrowFeelsLikeLow:result.data.daily.data[2].apparentTemperatureMin,
                overmorrowSunriseTime:result.data.daily.data[2].sunriseTime,
                overmorrowSunsetTime:result.data.daily.data[2].sunsetTime,
                overmorrowTimeStamp:result.data.daily.data[2].time,
                thirdDaySummary:result.data.daily.data[3].summary,
                thirdDayIcon:result.data.daily.data[3].icon,
                thirdDayPrecipType:result.data.daily.data[3].precipType,
                thirdDayPrecipProbability:result.data.daily.data[3].precipProbability,
                thirdDayHigh:result.data.daily.data[3].temperatureMax,
                thirdDayHighTime:moment.unix(result.data.daily.data[3].temperatureMaxTime),
                thirdDayLow:result.data.daily.data[3].temperatureMin,
                thirdDayLowTime:moment.unix(result.data.daily.data[3].temperatureMinTime),
                thirdDayFeelsLikeHigh:result.data.daily.data[3].apparentTemperatureMax,
                thirdDayFeelsLikeLow:result.data.daily.data[3].apparentTemperatureMin,
                thirdDaySunriseTime:result.data.daily.data[3].sunriseTime,
                thirdDaySunsetTime:result.data.daily.data[3].sunsetTime,
                thirdDayTimeStamp:result.data.daily.data[3].time,
            })
        })
        .catch(function (err) {
            console.error(err.message);
            console.error(err.stack);
         });
    }

	render() {
        return (
            <div className="weather">

                <SunriseSunset 
                currentTime={this.props.currentTime}
                sunriseTime={this.state.sunriseTime}
                sunsetTime={this.state.sunsetTime}
                />
                <div className="col-sm-3">
                    <TodaysWeather
                    currentSummary={this.state.currentSummary}
                    currentIcon={this.state.currentIcon}
                    currentTemperature={this.state.currentTemperature}
                    currentFeelsLikeTemp={this.state.currentFeelsLikeTemp}
                    sunriseTime={this.state.sunriseTime}
                    sunsetTime={this.state.sunsetTime}
                    todayHigh={this.state.todayHigh}
                    todayHighTime={this.state.todayHighTime}
                    todayLow={this.state.todayLow}
                    todayLowTime={this.state.todayLowTime}
                    todayFeelsLikeHigh={this.state.todayFeelsLikeHigh}
                    todayFeelsLikeLow={this.state.todayFeelsLikeLow}
                    nextHourSummary={this.state.nextHourSummary}
                    nextHourDataArray={this.state.nextHourDataArray}
                    />
                </div>
                <div className="col-sm-3">
                    <DayWeather
                    summary={this.state.tomorrowSummary}
                    icon={this.state.tomorrowIcon}
                    precipType={this.state.tomorrowPrecipType}
                    precipProbability={this.state.tomorrowPrecipProbability}
                    high={this.state.tomorrowHigh}
                    highTime={this.state.tomorrowHighTime}
                    low={this.state.tomorrowLow}
                    lowTime={this.state.tomorrowLowTime}
                    feelsLikeHigh={this.state.tomorrowFeelsLikeHigh}
                    feelsLikeLow={this.state.tomorrowFeelsLikeLow}
                    sunriseTime={this.state.tomorrowSunriseTime}
                    sunsetTime={this.state.tomorrowSunsetTime}
                    timestamp={this.state.tomorrowTimeStamp}
                    />
                </div>
                <div className="col-sm-3">
                    <DayWeather
                    summary={this.state.overmorrowSummary}
                    icon={this.state.overmorrowIcon}
                    precipType={this.state.overmorrowPrecipType}
                    precipProbability={this.state.overmorrowPrecipProbability}
                    high={this.state.overmorrowHigh}
                    highTime={this.state.overmorrowHighTime}
                    low={this.state.overmorrowLow}
                    lowTime={this.state.overmorrowLowTime}
                    feelsLikeHigh={this.state.overmorrowFeelsLikeHigh}
                    feelsLikeLow={this.state.overmorrowFeelsLikeLow}
                    sunriseTime={this.state.overmorrowSunriseTime}
                    sunsetTime={this.state.overmorrowSunsetTime}
                    timestamp={this.state.overmorrowTimeStamp}
                    />
                </div>
                <div className="col-sm-3">
                    <DayWeather
                    summary={this.state.thirdDaySummary}
                    icon={this.state.thirdDayIcon}
                    precipType={this.state.thirdDayPrecipType}
                    precipProbability={this.state.thirdDayPrecipProbability}
                    high={this.state.thirdDayHigh}
                    highTime={this.state.thirdDayHighTime}
                    low={this.state.thirdDayLow}
                    lowTime={this.state.thirdDayLowTime}
                    feelsLikeHigh={this.state.thirdDayFeelsLikeHigh}
                    feelsLikeLow={this.state.thirdDayFeelsLikeLow}
                    sunriseTime={this.state.thirdDaySunriseTime}
                    sunsetTime={this.state.thirdDaySunsetTime}
                    timestamp={this.state.thirdDayTimeStamp}
                    />
                </div>
            </div>
        )
	}
}

export default Weather;