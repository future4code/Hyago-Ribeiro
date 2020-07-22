import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './../HomePage/HomePage';
import LoginPage from './../LoginPage/LoginPage';
import CreateTripPage from './../CreateTripPage/CreateTripPage';
import ListTripsPage from './../ListTripsPage/ListTripsPage';
import TripDetailPage from './../TripDetailPage/TripDetailPage';
import Header from './../Header/Header';
import FormPage from './../FormPage/FormPage';


function Router() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" >
                <HomePage />
            </Route>
            <Route exact path="/login" >
                <LoginPage />
            </Route>
            <Route exact path="/formulario-inscricao">
                <FormPage />
            </Route>
            <Route exact path="/criar-viagem" >
                <CreateTripPage />
            </Route>
            <Route exact path="/listar-viagem" >
                <ListTripsPage />
            </Route>
            <Route exact path="/detalhes-viagem" >
                <TripDetailPage />
            </Route>
            <Route exact="/" >
                <h1>Error 404</h1>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Router;
