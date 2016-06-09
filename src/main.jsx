var React = require('react');
var ReactDOM = require('react-dom');
var DeltaTime = require('./components/DeltaTime.jsx');
var ListManager = require('./components/ListManager.jsx');
//var PullData = require('./components/PullData.jsx');

ReactDOM.render(
  <ListManager
  title="COOLING"
  tray="TRAY NAME"
  parts="#PARTS"
  lates="#LATES"
  delta="DELTA"
  comment="COMMENT"
  tName="20160608_Rush1"
  tParts="20"
  tLates="2"
  tDelta="00:20:23"
  tComment="Move to next status"
  panelColor="#ff8080" />,
  document.getElementById('Cooling'));

ReactDOM.render(
  <ListManager
  title="SORTING 1"
  tray="TRAY NAME"
  parts="#PARTS"
  lates="#LATES"
  delta="DELTA"
  comment="COMMENT"
  panelColor="#ffcccc" />,
  document.getElementById('Sort1'));
ReactDOM.render(
  <ListManager
  title="SORTING 2 (Polishing/Dyed)"
  tray="TRAY NAME"
  parts="#PARTS"
  lates="#LATES"
  delta="DELTA"
  comment="COMMENT"
  panelColor="#00e6e6"/>,
  document.getElementById('Sort2'));
// ReactDOM.render(
//   <DeltaTime
//   title="DELTA"
//    />,
//    document.getElementById('delta'));
