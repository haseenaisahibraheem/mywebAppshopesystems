import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import CheckOut from "./MainPage/CheckOut";
import MainSection from "./MainPage/MainSection";

import ProductDetail from "./MainPage/ProductDetail";
import Order from "./MainPage/Order";

import "./index.css";
import Navigation from "./MainPage/Navigation";

const App = () => {
  return (
    <Fragment>
      <div className="main_wrap">
        <header>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <MainSection />
            </Route>
            <Route path="/product_detail">
              <ProductDetail />
            </Route>
            <Route path="/checkout">
              <CheckOut />
            </Route>
            <Route path="/order">
              <Order />
            </Route>
          </Switch>
        </main>
      </div>
    </Fragment>
  );
};

export default App;
