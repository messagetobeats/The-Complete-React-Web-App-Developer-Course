var React = require('react');
var GreeterForm = require('GreeterForm');
var GreeterMessage = require('GreeterMessage');


var Greeter = React.createClass({

        getDefaultProps: function()
        {
          return {name: 'React', message: 'This is a default message'}
        },

        getInitialState: function()
        {
          return {name: this.props.name, message:this.props.message}
        },

        onNewName: function(name)
        {
          this.setState({name:name});
        },

        onNewMessage: function(message)
        {
          this.setState({message:message});
        },


        render: function()
        {
          return(
            <div>
                  <GreeterMessage name = {this.state.name} message={this.state.message}/>
                  <GreeterForm onNewName = {this.onNewName} onNewMessage = {this.onNewMessage}/>
            </div>
          )
        }
});

module.exports = Greeter;
