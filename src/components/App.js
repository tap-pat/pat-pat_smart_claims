import React, { Component } from 'react';
import Info from './Info';
import '../css/App.css';

class App extends Component {

  constructor(){
    super();

    this.addClaim = this.addClaim.bind(this);
    this.state = {
      infos:{}
    }
  }

  async addClaim(info){
   /* This section will update the state infos */
   /*
   const infos = {...this.state.infos};
   const timestamp = Date.now();
   infos[`info-${timestamp}`] = info;
   this.setState({infos:infos});
   console.log(JSON.stringify(infos));
   */

   var savePage = 'http://10.215.148.232:8080/CalmRestApi/api/smartclaims/save';

   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(info)
   };

   const request = new Request(savePage, options);
   const response = await fetch(request)
      .then(response => {
        if (response.status === 201){
          alert('Claim has been successfully submitted.');
        }
        else if(response.status === 204){
          console.log("Response Status:" + response.status);
          alert('Policy Number does not exist.');
        }
        else {
          console.log("Response Status:" + response.status);
          alert('Claim is not successfuly submitted. Please try again later.');
        }
      })
      .catch(err => {alert('Connection Refused.')});

 }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <text className="WelcomeText">Welcome Guest!</text>
        </div>

        <Info addClaim={this.addClaim}/>

        <div className="copyrightText">
          <span>© 2018 Accenture. All Rights Reserved.</span>
        </div>
      </div>
    );
  }
}

export default App;
