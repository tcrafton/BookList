import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import BooksPage from "../components/books/BooksPage";
import ManageBookPage from "../components/books/ManageBookPage";
import Header from "./common/Header";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/books" component={BooksPage} />
        <Route path="/book/:id" component={ManageBookPage} />
        <Route path="/book/" component={ManageBookPage} />
      </Switch>
    </div>
  );
};

export default App;
