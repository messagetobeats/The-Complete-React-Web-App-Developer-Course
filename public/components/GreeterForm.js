var React = require('react');

var GreeterForm = React.createClass({


  onFormSubmit: function(e)
  {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;


    if(name.length > 0)
    {
       this.props.onNewName(name);
       this.refs.name.value = '';

    }

    if(message.length > 0)
    {
       this.props.onNewMessage(message);
       this.refs.message.value = '';

    }
  },

  render: function()
  {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" placeholder="Name"/>
          <input type="text" ref="message" placeholder="Message"/>
          <button>Send</button>
        </form>
      </div>
    )
  }
})

module.exports = GreeterForm;
