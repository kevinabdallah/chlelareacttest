import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

class Book extends React.Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <ul>
          <li>Book1</li>
          <li>Book2</li>
          <li>Book3</li>
        </ul>
      </div>
    );
  }
}

class Buttons extends React.Component {
  render() {
    return (
	<div className="bitton-list">
	
		  {/* Standard button */}
		  <button>Default</button>

		  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
		  <button class="primary">Primary</button>

		  {/* Indicates a successful or positive action */}
		  <button bsStyle="success">Success</button>

		  {/* Contextual button for informational alert messages */}
		  <button bsStyle="info">Info</button>

		  {/* Indicates caution should be taken with this action */}
		  <button bsStyle="warning">Warning</button>

		  {/* Indicates a dangerous or potentially negative action */}
		  <button bsStyle="danger">Danger</button>

		  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
		  <button bsStyle="link">Link</button>
		
	  </div>
  );
  }
}

class Forms extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}


ReactDOM.render( <ShoppingList />,  document.getElementById("root"));
ReactDOM.render( <Book />,  document.getElementById("book"));
ReactDOM.render( <Buttons />,  document.getElementById("but"));
ReactDOM.render( <FormExample />,  document.getElementById("divForm"));


    

