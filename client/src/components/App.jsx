import React, {Component} from 'react';
import Clock from './Clock/Clock'
import Weather from './Weather/Weather'
import moment from 'moment';

class App extends Component {
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
    return (
      <div>
        <div className="row">
          <div className="col-sm-7">
            <Clock currentTime={this.state.currentTime} />
          </div>
          <div className="col-sm-5"></div>
        </div>
        <br/>
        <div className="row attach-bottom">
          <div className="col-sm-7">
            <Weather currentTime={this.state.currentTime}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;