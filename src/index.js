import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      strTemp: 'Click The Button',
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000)
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.strTemp}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={() => this.setState({ strTemp: 'Hello' })}>Test</button>  
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);