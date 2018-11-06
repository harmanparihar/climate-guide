import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  username:{
    type: String,
    required: 'Enter a your name'
  },
  comment:{
    type: String,
    required: 'Enter a your comment'
  },
  likes : {
    type: Number,
  }
});
