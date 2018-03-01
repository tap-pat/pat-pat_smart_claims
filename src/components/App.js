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

   var savePage = 'http://10.215.148.13:8080/CalmRestApi/api/smartclaims/save';

   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(info),
     mode: 'CORS',
   };

   console.log(JSON.stringify(info));

   const request = new Request(savePage, options);
   const response = await fetch(request);
   const status = await response.status;

   console.log({status});
   if (status === 404){
     alert('404: Not Found');
   } else if (status === 200){
     alert('Claim has been successfully submitted.')
   }
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
