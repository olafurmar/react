const mongoose = require("mongoose");

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: String,
    body: String,
    authorName: String,
    authorId: String,
    totalVoteCount: Number,
    numberOfVotes: Number
  },
  { timestamps: true }
);

PostSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    title: this.title,
    body: this.body,
    authorName: this.authorName,
    authorId: this.authorId,
    totalVoteCount: this.totalVoteCount,
    numberOfVotes: this.numberOfVotes,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("Posts", PostSchema);
