import React from 'react';
import Login from './components/Login';
import Register from './components/Register'
import Principal from './components/Principal';
import rutaPrivada from './components/rutas/rutaPrivada';
import NuevaTemporada from './components/TemporadaAnime/NuevaTemporada';
import TemporadaAnime from './components/TemporadaAnime';
import EditarTemporada from './components/TemporadaAnime/EditarTemporada';
import { PersistGate } from 'redux-persist/integration/react'


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import {store, persistor} from './store';


function App() {
  return (
    <Router>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/" component={rutaPrivada(Principal)}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/temporada" component={rutaPrivada(TemporadaAnime)}/>
          <Route exact path="/temporada/nuevo" component={rutaPrivada(NuevaTemporada)}/>
          <Route exact path="/temporada/editar/:id" component={rutaPrivada(EditarTemporada)}/>
        </Switch>
      </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
