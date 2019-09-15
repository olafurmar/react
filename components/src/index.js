import React from "react";
import ReactDom from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          comment={Faker.lorem.sentence()}
          timeAgo="12:34"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
