const asyncHandler = require("express-async-handler");
const createSlug = require("slug");
const Comment = require("../model/comment.model");
const commentController = {
  createComment: asyncHandler(async (req, res) => {
    const { slug } = req.params;
    if (slug && req.user && req.body.text) {
      const newComment = await Comment.create({
        post: slug,
        text: req.body.text,
        user: req.user.id,
      });
      if (newComment) {
        return res.status(401).json({
          status: 0,
          message: "Comment successfully",
          data: newComment,
        });
      }
    } else {
      return res.status(401).json({
        status: 1,
        message: "Comment Failure",
      });
    }
  }),
};

module.exports = commentController;
