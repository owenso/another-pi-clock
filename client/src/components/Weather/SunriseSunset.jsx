import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import Sunrise from './icons/Sunrise.jsx';
import SunriseFill from './icons/SunriseFill.jsx';
import SunriseAlt from './icons/SunriseAlt.jsx'
import SunriseAltFill from './icons/SunriseAltFill.jsx'
import Sunset from './icons/Sunset.jsx';
import SunsetFill from './icons/SunsetFill.jsx';
import SunsetAlt from './icons/SunsetAlt.jsx'
import SunsetAltFill from './icons/SunsetAltFill.jsx'

class SunriseSunset extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

    sunriseOrSunset() {
        const {currentTime } = this.props;
        if (this.props.sunriseTime) {
            const sunriseTime = moment(this.props.sunriseTime)
            if (currentTime.isBetween(sunriseTime.subtract(10,'minutes'), sunriseTime.add(10,'minutes'))) {
                return <Sunrise />
            }
        }
        if (this.props.sunsetTime) {
            const sunsetTime = moment(this.props.sunsetTime)
            if (currentTime.isBetween(sunsetTime.subtract(10,'minutes'), sunsetTime.add(10,'minutes'))) {
                return <Sunset />
            }
        }
    }

	render() {
        return (
            <div className="sunrise-sunset-icon">
                {this.sunriseOrSunset()}
            </div>
        )
	}
}

export default SunriseSunset;