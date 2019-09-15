import React from 'react';
import TimeAgo from "react-timeago";

class PostDetails extends React.Component{
  render(){
    const {authorName, title, createdAt, body} = this.props.post;
    return (
        <div className="content">
          <div className="right floated">{authorName}</div>
          <div className="header">{title}</div>
          <div className="meta">
            <TimeAgo date={createdAt} />
            {this.props.rating}
          </div>
          <div className="description">{body}</div>
          {this.props.controlButtons}
        </div>
    );
  }
}

export default PostDetails;