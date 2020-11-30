import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import SignUp from './Components/SignUp/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;