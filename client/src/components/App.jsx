import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './navBar';
import Home from './Home';
import MediaPlayer from './mediaPlayer';

const App = () => (
  <main className='global-main'>
    <NavBar />

    <Switch>
      <Route path="/" component={ Home } />
    </Switch>

    <MediaPlayer />
  </main>
);

export default App;
