import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import CloudSun from './icons/CloudSun.jsx'
import CloudSunFill from './icons/CloudSunFill.jsx'
import CloudMoon from './icons/CloudMoon.jsx'
import CloudMoonFill from './icons/CloudMoonFill.jsx'
import Sun from './icons/Sun.jsx'
import SunFill from './icons/SunFill.jsx'
import Moon from './icons/Moon.jsx'
import MoonFill from './icons/MoonFill.jsx'
import CloudDrizzleFill from './icons/CloudDrizzleFill.jsx';
import CloudDrizzleSun from './icons/CloudDrizzleSun.jsx'
import CloudDrizzleMoon from './icons/CloudDrizzleMoon.jsx'
import CloudLightRainFill from './icons/CloudRainAltFill.jsx'
import CloudLightRainSun from './icons/CloudRainSunAlt.jsx'
import CloudLightRainMoon from './icons/CloudRainMoonAlt.jsx'
import CloudDrizzleSunFill from './icons/CloudDrizzleSunFill.jsx'
import CloudDrizzleMoonFill from './icons/CloudDrizzleMoonFill.jsx'
import CloudLightRainSunFill from './icons/CloudRainSunAltFill.jsx'
import CloudLightRainMoonFill from './icons/CloudRainMoonAltFill.jsx'
import CloudRain from './icons/CloudRain.jsx'
import CloudRainFill from './icons/CloudRainFill.jsx'
import Cloud from './icons/Cloud.jsx'
import CloudFill from './icons/CloudFill.jsx'

class WeatherIcon extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

    currentWeatherIcon(){
        const { currentIcon, currentSummary, sunriseTime, sunsetTime } = this.props;
        const isDaytime =  moment().isBetween(sunriseTime, sunsetTime, 'second', [])
        if (currentIcon && currentSummary){
            switch (currentIcon) {
                case "partly-cloudy-day":
                return <CloudSunFill />
                case "partly-cloudy-night":
                return <CloudMoonFill />
                case "clear-day":
                return <Sun />
                case "clear-night":
                return <Moon />
                case "rain":
                    if (currentSummary.includes("Light")){
                        return <CloudDrizzleFill />
                    } else if (currentSummary.includes('Drizzle')){
                        return <CloudLightRainFill />
                    } else {
                        return <CloudRainFill />
                    }
                case "cloudy":
                return <CloudFill />
                default:
                return <p>{currentIcon}</p>
            }
        }
    }

	render() {
        return (
            <div className="weather-icon">
                {this.currentWeatherIcon()}
            </div>
        )
	}
}

export default WeatherIcon;