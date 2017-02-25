import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import moment from 'moment';
import Sunrise from './icons/Sunrise.jsx';

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
                todayHigh:result.data.daily.data[0].temperatureMax,
                todayHighTime:moment.unix(result.data.daily.data[0].temperatureMaxTime),
                todayLow:result.data.daily.data[0].tempertureMin,
                todayLowTime:moment.unix(result.data.daily.data[0].temperatureLowTime),
                todayFeelsLikeHigh:result.data.daily.data[0].apparentTemeratureMax,
                todayFeelsLikeLow:result.data.daily.data[0].apparentTemeratureLow,
                nextHourSummary:result.data.minutely.summary,
                nextHourDataArray:result.data.minutely.data,
                weekSummary:result.data.daily.summary,
                tomorrowSummary:result.data.daily.data[1].summary,
                tomorrowIcon:result.data.daily.data[1].icon,
                tomorrowPrecipType:result.data.daily.data[1].precipType,
                tomorrowPrecipProbability:result.data.daily.data[1].precipProbability,
                tomorrowHigh:result.data.daily.data[1].temperatureMax,
                tomorrowHighTime:moment.unix(result.data.daily.data[1].temperatureMaxTime),
                tomorrowLow:result.data.daily.data[1].tempertureMin,
                tomorrowLowTime:moment.unix(result.data.daily.data[1].temperatureLowTime),
                tomorrowFeelsLikeHigh:result.data.daily.data[1].apparentTemeratureMax,
                tomorrowFeelsLikeLow:result.data.daily.data[1].apparentTemeratureLow,
                overmorrowSummary:result.data.daily.data[2].summary,
                overmorrowIcon:result.data.daily.data[2].icon,
                overmorrowPrecipType:result.data.daily.data[2].precipType,
                overmorrowPrecipProbability:result.data.daily.data[2].precipProbability,
                overmorrowHigh:result.data.daily.data[2].temperatureMax,
                overmorrowHighTime:moment.unix(result.data.daily.data[2].temperatureMaxTime),
                overmorrowLow:result.data.daily.data[2].tempertureMin,
                overmorrowLowTime:moment.unix(result.data.daily.data[2].temperatureLowTime),
                overmorrowFeelsLikeHigh:result.data.daily.data[2].apparentTemeratureMax,
                overmorrowFeelsLikeLow:result.data.daily.data[2].apparentTemeratureLow,
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
                <h1>{this.state.currentTemperature}</h1>
                <h1>{this.state.currentSummary}</h1>


                <Sunrise />


            </div>
        )
	}
}

export default Weather;