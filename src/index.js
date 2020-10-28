import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import Contact from './components/contact';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/artist/:artistid" component={Artist} />
        <Route path='/contact' component={Contact}/>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
