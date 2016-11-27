var React = require('react');
var ReactDOM = require('react-dom');
var Marked = require('marked');

require('!style!css!sass!normalize-scss');
require('!style!css!sass!./styles/main.sass');

var App = React.createClass({

	getInitialState: function() {
		return ({
			inputText: 'FCC Markdown Previewer\n==\n\nExample raw paragraph.\n\nUnordered list:\n- one potato\n- red potato\n- big potato\n\nTop 3 squirrels in ordered list:\n1.Squirrel Steve\n2.Squirrel Dave\n3.Squirrel Bob\n\n>"Block quotes from the internet are *very* important of course!"\n\n`function() { return( inline.code ) }`\n\n```\nvar thisOne = {blockCode: true};\n//this is it\nconsole.log(\'Hello World\') //Hello World\n```\n\n![](https://66.media.tumblr.com/avatar_0a16a28014af_128.png)\n\n[link](http://www.google.com)\n',
			outputText: ''
		})
	},

  updateOutput: function(event) {
    this.setState({inputText: event.target.value, outputText:''})
  },

	render: function() {
		return ( 
			<div className="container">
        <div className="container-50 container-input">
          <p className="description">text</p> 
          <textarea rows="10" wrap="hard" onChange={this.updateOutput} value={this.state.inputText} />
        </div>
        <div className="container-50 container-output"> 
          <p className="description">markdown</p>  
          <p dangerouslySetInnerHTML={{__html: Marked(this.state.inputText, {breaks: true})}}></p>
  			</div>
      </div>
		)
	}

})

ReactDOM.render( <App /> , document.getElementById('app'));