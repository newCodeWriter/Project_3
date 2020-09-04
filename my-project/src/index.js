import React from "react";
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import NavBar from './components/navbar';
import About from './components/about';
import Error from './components/error';
import Contact from './components/contact';
import App from './App';
import todoApp from './reducers/reducers';


const store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe( () => console.log("todo app="+store.getState()));

const Routeit = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/todos"/>}/>
          <Route path="/about" component={About} />
          <Route path="/todos" component={App} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Routeit />
  </Provider>, 
  document.getElementById("root")
  )