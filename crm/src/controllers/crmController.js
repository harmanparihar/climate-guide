import mongoose from 'mongoose';
import { DataSchemaReply } from '../models/crmModel';
import { userSchema } from '../models/user';

const Post = mongoose.model('comments', DataSchemaReply);
const User = mongoose.model('User', userSchema)

export const addNewPost = (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getPosts = (req, res) => {
    Post.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getPostWithID = (req, res) => {
    Post.findById(req.params.userId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updatePost = (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.userId}, req.body, {new :true}, (err, contact) => {
    if (err) {
        res.send(err);
    }
    res.json(contact);
  });
};

export const deletePost = (req, res) => {
  Post.remove({ _id: req.params.userId}, (err,contact) => {
    if (err) {
        res.send(err);
    }
    res.json({message : 'successfully deleted contact'});
  })
}
