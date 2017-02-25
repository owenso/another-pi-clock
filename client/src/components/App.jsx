import React, {Component} from 'react';
import Clock from './Clock/Clock'
import Weather from './Weather/Weather'

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <Clock />
        </div>
        <div className="col-sm-8">
          <Weather />
        </div>
      </div>
    );
  }
}
