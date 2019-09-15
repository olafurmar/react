const mongoose = require("mongoose");
const router = require("express").Router();
const Comments = mongoose.model("Comments");

router.post("/", (req, res, next) => {
  console.log("post in comment");
  const { body } = req;

  if (!body.authorName) {
    return res.status(422).json({
      errors: {
        authorName: "is required"
      }
    });
  }

  if (!body.postId) {
    return res.status(422).json({
      errors: {
        postId: "is required"
      }
    });
  }

  if (!body.body) {
    return res.status(422).json({
      errors: {
        body: "is required"
      }
    });
  }

  const finalComment = new Comments(body);
  return finalComment
    .save()
    .then(() => res.json({ comment: finalComment.toJSON() }))
    .catch(err => res.status(400).json({}));
});

router.get("/", (req, res, next) => {
  console.log("get in comment");
  return Comments.find()
    .sort({ createdAt: "descending" })
    .then(comment =>
      res.json({ comments: comment.map(comment => comment.toJSON()) })
    )
    .catch(err => res.status(400).json({}));
});

router.param("id", (req, res, next, id) => {
  return Comments.find({ postId: id }, (err, comment) => {
    if (err) {
      return res.sendStatus(404);
    } else if (comment) {
      req.comment = comment;
      return next();
    }
  }).catch(err => res.status(400).json({}));
});

router.get("/:id", (req, res, next) => {
  const sortedComments = req.comment
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  return res.json({
    comment: sortedComments.map(comment => comment.toJSON())
      });
});

module.exports = router;
