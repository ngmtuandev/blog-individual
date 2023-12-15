const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    post: {
      type: String,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: [String],
      default: [],
    },
    reply: [
      {
        post: {
          type: mongoose.Types.ObjectId,
          ref: "Post",
        },
        content_reply: String,
        like_reply: {
          type: [String],
          default: [],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
