import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inicio from "./components/Inicio";
import Menu from './components/Menu';
import Random from './components/Random';

function App() {

  return (
    <Router>
      <Menu />

      <Switch>

        <Route path="/Random">
          <Random />
        </Route>

        <Route path="/" exact>
          <Inicio pagina={1} />
        </Route>

      </Switch>


    </Router>
  );
}

export default App;
