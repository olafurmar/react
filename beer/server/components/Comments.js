const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    body: String,
    authorName: String,
    postId: String
  },
  { timestamps: true }
);

CommentSchema.methods.toJSON = function () {
  return {
    _id: this._id,
    body: this.body,
    authorName: this.authorName,
    postId: this.postId,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("Comments", CommentSchema);
