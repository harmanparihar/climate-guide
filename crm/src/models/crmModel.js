// /backend/comments.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchemaReply = new Schema(
  {
    username: String,
    commentId: Number,
    originalId: Number,
    originalMsg: String,
    comment: String,
    likes: 0,
      },
  { timestamps: true }
);


//on line 8, I guess this is how you reffer to key in another table
// {type: Schema.Types.ObjectId, ref: 'posts' },
// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("comments", DataSchemaReply);
