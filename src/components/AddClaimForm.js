import React, { Component } from 'react';

class AddClaimForm extends Component{

  constructor(props) {
    super(props);
    this.state = {value: 'Flood'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){

    var causeOfLoss = '';
    if(this.lossType.value === "storm"){
      causeOfLoss = "Flood";
    } else {
      causeOfLoss = "Others";
    }
    this.setState({value: causeOfLoss});
  }

  submitClaim(event){
    event.preventDefault();
    const claimInfo = {
      name: this.name.value,
      address: this.address.value,
      contactNo: this.contactNo.value,
      policyID: this.policyID.value,
      location: this.location.value,
      lossType: this.lossType.value,
      claimCategory: this.claimCategory.value,
      causeOfLoss: this.causeOfLoss.value,
      waterLevel: this.waterLevel.value,
      damageDesc: this.damageDesc.value,
    }
    this.props.addClaim(claimInfo);
    this.infoForm.reset();
  }

  render(){

    return (
      <div>
        <form ref={(input) => this.infoForm = input} className="Personal-info-edit" onSubmit={(e) => this.submitClaim(e)}>
          <h1>Personal Information</h1>

          <span>Name: </span>
          <input ref={(input) => this.name = input} type="text" placeholder="Surname, First Name, MI."/><br/>
          <span>Address: </span>
          <input ref={(input) => this.address = input} type="text" placeholder="Address"/><br/>
          <span>Contact Number: </span>
          <input ref={(input) => this.contactNo = input} type="text" placeholder="Contact Number"/><br/>
          <span>Policy Number: </span>
          <input ref={(input) => this.policyID = input} type="text" placeholder="Policy Number"/><br/>

          <h1>Loss Information</h1>

          <span>Location: </span>
          <select ref={(input) => this.location = input} required>
            <option value="" selected hidden>Select your option</option>
            <option value="inside">Inside Policy Holder's Address</option>
            <option value="outside">Outside Policy Holder's Address</option>
          </select><br/>

          <span>Loss Type: </span>
          <select ref={(input) => this.lossType = input} onChange={(e) => this.handleChange(e)} required>
            <option value="" selected hidden>Select your option</option>
            <option value="storm">Storm</option>
            <option value="others">Others</option>
          </select><br/>

          <span>Cause of Loss: </span>
          <input ref={(input) => this.causeOfLoss = input} type="text" value={this.state.value} disabled/><br/>

          <span>Claim Category: </span>
          <select ref={(input) => this.claimCategory = input} required>
            <option value="" selected hidden>Select your option</option>
            <option value="property">Property</option>
            <option value="liability">Liability</option>
          </select><br/>

          <span>Water Level: </span>
          <select ref={(input) => this.waterLevel = input} required>
            <option value="" selected hidden>Select your option</option>
            <option value="higher">Higher than xx cm?</option>
            <option value="lower">Lower than xx cm?</option>
          </select><br/>

          <span>What has been damaged? </span>
          <textarea ref={(input) => this.damageDesc = input} placeholder="Properties inside the house"></textarea>

          <button type="submit" className="myButton">Submit</button>
          <button type="reset" className="myButton">Reset</button>

        </form>
      </div>
    )
  }
}

export default AddClaimForm;
