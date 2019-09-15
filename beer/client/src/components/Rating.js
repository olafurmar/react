import React from "react";
import { Rating as UIrating } from "semantic-ui-react";

const getRating = post => {
  const { numberOfVotes, totalVoteCount } = post;
  if (numberOfVotes === 0) {
    return 0;
  }

  return totalVoteCount / numberOfVotes;
};

const Rating = props => {
  return (
    <UIrating
      className="right floated"
      disabled={props.disabled}
      clearable={props.clearable}
      rating={getRating(props.post)}
      onRate={props.handleRate}
      maxRating="5"
    />
  );
};

Rating.defaultProps = {
  disabled: true,
  clearable: false
};

export default Rating;
