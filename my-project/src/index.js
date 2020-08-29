import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import NavBar from './components/navbar';
import About from './components/about';
import Error from './components/error';
import Contact from './components/contact'
import Tasks from './components/tasks'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"))