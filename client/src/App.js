import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Componenets/Header/Header';
import Register from './Componenets/LoginRegistration/Register';
import Login from './Componenets/LoginRegistration/Login';
function App() {
  return (
    <Router>
      <div className="App">

            <Header/>
       
            <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
