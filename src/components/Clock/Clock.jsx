import React, {Component, PropTypes} from 'react';
// import {connect} from 'react-redux';
import moment from 'moment';

// @connect((store) => {
// 	return {

// 	};
// })
class Clock extends Component {
	constructor(props) {
		super(props);
        this.state = {
            currentTime:moment()
        }
	}

	componentWillMount() {
        this.ticTock()
	}

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    ticTock () {
        const clock = setInterval(()=>{this.setState({currentTime:moment()})}, 1000)
        this.setState({intervalId:clock});
    }
	render() {
        return <h1>{this.state.currentTime.format('MMMM Do YYYY, h:mm:ss a')}</h1>
	}
}

export default Clock;