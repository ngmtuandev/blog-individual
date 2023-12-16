const asyncHandler = require("express-async-handler");
const createSlug = require("slug");
const Post = require("../model/post.model");
const Comment = require("../model/comment.model");
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
  getPosts: asyncHandler(async (req, res) => {
    const posts = await Post.find();
    if (posts) {
      return res.status(200).json({
        status: 0,
        message: "Get all post successfully",
        data: posts,
      });
    }
  }),
  updatePost: asyncHandler(async (req, res) => {
    const { slug } = req.params;
    if (slug && req.body) {
      const newSlug = await createSlug(req.body.title);
      const postUpdate = await Post.findOneAndUpdate(
        { slug },
        { ...req.body, slug: newSlug },
        {
          new: true,
        }
      );
      if (postUpdate) {
        return res.status(201).json({
          status: 0,
          message: "Updated successfully",
          data: postUpdate,
        });
      }
    }
  }),
  likePost: asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const id = req.user.id;
    const post = await Post.findOne({ slug });
    if (!post) {
      return res.status(401).json({
        status: -1,
        message: "Like post fail",
      });
    }
    if (!post?.likes?.includes(id)) {
      post?.likes?.push(id);
      await post.save();
      return res.status(201).json({
        status: 0,
        message: "Like post successfully",
      });
    } else {
      post.likes = post?.likes?.filter((item) => item !== id);
      await post.save();
      return res.status(201).json({
        status: 0,
        message: "Unlike post successfully",
      });
    }
  }),
  getCommentPost: asyncHandler(async (req, res) => {
    const { slug } = req.params;
    console.log("slug", slug);
    const comments = await Comment.find({ post: slug });
    console.log("comment >>>", comments);
    if (comments) {
      return res.status(201).json({
        status: 0,
        message: "Get Comment post successfully",
        data: comments,
      });
    }
    return res.status(400).json({
      status: 1,
      message: "Get Comment post failure",
    });
  }),
  uploadImagePost: asyncHandler(async (req, res) => {
    const { slug } = req.params;
    if (req.file) {
      console.log("req file >>>", req.file);
      const updatePost = await Post.findOneAndUpdate(
        { slug },
        { thumb: req.file.path },
        { new: true }
      );
      if (updatePost) {
        return res.status(201).json({
          status: 0,
          message: "Upload Image post successfully",
          data: updatePost,
        });
      }
    }
  }),
};

module.exports = postController;
