import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inicio from "./components/Inicio";
import Menu from './components/Menu';

function App() {

  return (
    <Router>
      <Menu />

      <Route path="/Random">

      </Route>

      <Route path="/">
        <Inicio pagina={1}/>
      </Route>


    </Router>
  );
}

export default App;
