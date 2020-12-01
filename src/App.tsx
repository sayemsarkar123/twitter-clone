import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUp from './Components/SignUp/SignUp';


export const LoginContext = createContext<any>([]);

const App: React.FC = () => {
  const [user, setUser] = useState<object>({isSignIn: false, tweets: [{desc: '', photoURL: ''}, {desc: '', photoURL: ''}, {desc: '', photoURL: ''}]});
  return (
    <LoginContext.Provider value={[user, setUser]}>
      <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/home">
          <Home></Home>
        </PrivateRoute>
      </Switch>
    </Router>
    </LoginContext.Provider>
  );
};

export default App;