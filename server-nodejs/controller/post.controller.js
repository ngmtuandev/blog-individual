const asyncHandler = require("express-async-handler");
const createSlug = require("slug");
const Post = require("../model/post.model");
const postController = {
  createPost: asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(401).json({
        status: 1,
        message: "Create Post not yield title and content empty",
      });
    }
    const slug = await createSlug(title);
    const newPost = await Post.create({ ...req.body, slug });
    if (newPost) {
      return res.status(201).json({
        status: 0,
        message: "create new post successfully",
        data: newPost,
      });
    }
  }),
  getOnePost: asyncHandler(async (req, res) => {
    const { slug } = req.params;
    if (slug) {
      const post = await Post.findOne({ slug });
      if (post) {
        return res.status(200).json({
          status: 0,
          message: "Get detail post successfully",
          data: post,
        });
      }
      return res.status(400).json({
        status: 1,
        message: "Get detail post fail",
      });
    }
  }),
};

module.exports = postController;
