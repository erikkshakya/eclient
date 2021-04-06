import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "./actions/article-actions";
import Navbar from "./components/nav-bar/navbar";
import FormArticle from "./components/form/form-article";
import Articles from "./components/articles/articles";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  return (
   <>
    <Router>  
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Articles} />
                <Route exact path="/articles/add" component={FormArticle} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
   </>
  );
};

export default App;
