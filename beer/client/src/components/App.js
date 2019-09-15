import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import PostList from './posts/PostList';
import history from "../history";
import PostCreate from './posts/PostCreate';
import PostShow from './posts/PostShow';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import OwnPostList from './posts/OwnPostList';
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/posts/create" exact component={PostCreate} />
            <Route path="/posts/edit/:id" exact component={PostEdit} />
            <Route path="/posts/delete/:id" exact component={PostDelete} />
            <Route path="/posts/:id" exact component={PostShow} />
            <Route path="/posts/own" exact component={OwnPostList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;