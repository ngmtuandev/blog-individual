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
        return res.status(201).json({
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
  likeComment: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const _id = req.user.id;
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(401).json({
        status: -1,
        message: "Like comment fail",
      });
    }
    if (!comment?.likes?.includes(_id)) {
      comment?.likes?.push(_id);
      await comment.save();
      return res.status(201).json({
        status: 0,
        message: "Like comment successfully",
      });
    } else {
      comment.likes = comment?.likes?.filter((item) => item !== _id);
      await comment.save();
      return res.status(201).json({
        status: 0,
        message: "Unlike comment successfully",
      });
    }
  }),
};

module.exports = commentController;
