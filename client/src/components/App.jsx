import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './navBar';

const App = () => (
  <main className='global-main'>
    <NavBar />
    <Switch>
      {/* insert routes for web app here */}
    </Switch>
  </main>
);

export default App;
