import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/test')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    console.log(this.state.data);

    return (
      <div>
        {this.state.data.map((data) => {
          return <h1>{data}</h1>;
        })}
      </div>
    );
  }
}
