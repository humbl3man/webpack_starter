import React, {Component} from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="text-center">{this.props.name}</h1>
      </div>
    );
  }
}
