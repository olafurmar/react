const mongoose = require("mongoose");
const router = require("express").Router();
const Posts = mongoose.model("Posts");

router.post("/", (req, res, next) => {
  const { body } = req;

  if (!body.title) {
    return res.status(422).json({
      errors: {
        title: "is required"
      }
    });
  }

  if (!body.authorName) {
    return res.status(422).json({
      errors: {
        authorName: "is required"
      }
    });
  }

  if (!body.authorId) {
    return res.status(422).json({
      errors: {
        authorId: "is required"
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

  body.numberOfVotes = 0;
  body.totalVoteCount = 0;

  const finalPost = new Posts(body);
  return finalPost
    .save()
    .then(() => res.json({ post: finalPost.toJSON() }))
    .catch(err => res.status(400).json({}));
});

router.get("/", (req, res, next) => {
  return Posts.find()
    .sort({ createdAt: "descending" })
    .then(posts => res.json({ posts: posts.map(post => post.toJSON()) }))
    .catch(err => res.status(400).json({}));
});

router.param("id", (req, res, next, id) => {
  return Posts.findById(id, (err, post) => {
    if (err) {
      return res.sendStatus(404);
    } else if (post) {
      req.post = post;
      return next();
    }
  }).catch(err => res.status(400).json({}));
});

router.get("/:id", (req, res, next) => {
  return res.json({
    post: req.post.toJSON()
  });
});

router.patch("/:id", (req, res, next) => {
  const { body } = req;

  if (typeof body.title !== "undefined") {
    req.post.title = body.title;
  }

  if (typeof body.authorName !== "undefined") {
    req.post.authorName = body.authorName;
  }

  if (typeof body.authorId !== "undefined") {
    req.post.authorId = body.authorId;
  }

  if (typeof body.body !== "undefined") {
    req.post.body = body.body;
  }

  return req.post
    .save()
    .then(() => res.json({ post: req.post.toJSON() }))
    .catch(err => res.status(400).json({}));
});

router.delete("/:id", (req, res, next) => {
  return Posts.findByIdAndRemove(req.post._id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(400).json({}));
});

router.patch("/rate/:id", (req, res, next) => {
  const { body } = req;

  if (typeof body.vote !== "undefined") {
    console.log(req.post);
    req.post.totalVoteCount += body.vote;
    req.post.numberOfVotes++;
  }

  return req.post
    .save()
    .then(() => res.json({ post: req.post.toJSON() }))
    .catch(err => res.status(400).json({}));
});

module.exports = router;
