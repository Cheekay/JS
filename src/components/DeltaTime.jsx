var React = require('react');

var DeltaTime = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};

  },

  tick: function() {
    this.setState({secondsElapsed: this.setState.secondsElapsed  + 1});
  },

  componentDidMount: function() {
    //this.interval = setInterval(this.tick, 1000);
    return setInterval(this.tick, 1000);
  },
  //
  // componentWillUnmount: function() {
  //   clearInterval(this.interval);
  // },

  render: function() {
    return (
    <div className= "container row">
        <h2>{this.props.title}</h2>
        Seconds Elapsed: {this.state.secondsElapsed}

    </div>
  );
  }
});

module.exports = DeltaTime;
