import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './components/App';
import SubmitClaim from './components/SubmitClaim';
import NotFound from './components/NotFound';
import './css/index.css';

ReactDOM.render(
  <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/SubmitClaim/" component={SubmitClaim} />
          <Route component={NotFound} />
        </Switch>
      </div>
  </Router>,
  document.getElementById('root')
)
//ReactDOM.render(<App />, document.getElementById('root'));
