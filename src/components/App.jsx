import React, {Component} from 'react';
import Clock from './Clock/Clock'
import Weather from './Weather/Weather'

export default class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Weather />
      </div>
    );
  }
}
