import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from './GoogleAuth'

class Header extends React.Component{
  render(){
    const id = 2
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Beer Blog
      </Link>
        <div className="right menu">
          <Link to={`/posts/own/${id}`} className="item">
            My Posts
        </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
  
};

export default Header;
