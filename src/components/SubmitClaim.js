import React, { Component } from 'react';

const API = 'https://localhost/3000/';

class SubmitClaim extends Component{

  constructor(props){
    super(props);

    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
      console.log({API});
  }

  render(){
    return (
      <div className="Info">
        <h1>SubmitClaim</h1>
      </div>
    )
  }
}

export default SubmitClaim;
