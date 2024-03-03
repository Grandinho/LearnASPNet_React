import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import IndividualMovie from "./movies/IndividualMovie";
import { landingPageDTO, movieDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Loading from "./utils/Loading";
import Button from "./utils/Button";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGenres from "./genres/IndexGenres";
import routes from "./router-config";
import configureValidation from "./Validation";

configureValidation();

function App() {


  return (
    <BrowserRouter forceRefresh>
      <Menu />
      <div className="container">
        <Switch>
          {routes.map(route => 
          <Route key={route.path} path={route.path} exact={route.exact}>
             <route.component />
          </Route>)}

        </Switch>
      </div>
      <footer className="bd-footer py-5 mt-5 bg-light">
        <div className="container">
          React Movies {new Date().getFullYear().toString()}
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
