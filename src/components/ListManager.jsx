var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return {items: [], newItemText:''};
    },
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();

        var currentItems = this.state.items;

        currentItems.push(this.state.newItemText);

        this.setState({items: currentItems, newItemText:''});
    },
    render: function() {

        var divStyle = {
          marginTop: 5
        }

        var panelStyle = {}

        if (this.props.panelColor) {
          panelStyle.background = this.props.panelColor;
        }

        return (
          <div className="container row">
            <div style={divStyle} className="col-sm-12">
              <div className="panel panel-default">
                <div style={panelStyle} className="panel-heading">
                    <h3>{this.props.title}</h3>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>{this.props.tray}</th>
                        <th>{this.props.parts}</th>
                        <th>{this.props.lates}</th>
                        <th>{this.props.delta}</th>
                        <th>{this.props.comment}</th>
                      </tr>
                      <tr>
                        <th>{this.props.tName}</th>
                        <th>{this.props.tParts}</th>
                        <th>{this.props.tLates}</th>
                        <th>{this.props.tDelta}</th>
                        <th>{this.props.tComment}</th>
                      </tr>
                  </tbody>

                  </table>
                </div>
                <div className="panel-body col-sm-4">
                  <form onSubmit={this.handleSubmit}>
                    <input className="from-control" onChange={this.onChange} value={this.state.newItemText} />
                    <button className="btn btn-primary">Update</button>
                    </form>
                    <List items={this.state.items} />
                  </div>
                </div>
              </div>
            </div>
        );
    }
});



module.exports = ListManager;
