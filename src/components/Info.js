import React, { Component } from 'react';
import AddClaimForm from './AddClaimForm';

class Info extends Component{

  render(){
    return (
      <div className="Info">
          <AddClaimForm addClaim={this.props.addClaim}/>
      </div>
    )
  }
}

export default Info;
