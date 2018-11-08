import mongoose from 'mongoose';
import { DataSchemaReply } from '../models/crmModel';

const Contact = mongoose.model('comments', DataSchemaReply);

export const addNewPost = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getPosts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const getPostWithID = (req, res) => {
    Contact.findById(req.params.userId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};

export const updatePost = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.userId}, req.body, {new :true}, (err, contact) => {
    if (err) {
        res.send(err);
    }
    res.json(contact);
  });
};

export const deletePost = (req, res) => {
  Contact.remove({ _id: req.params.userId}, (err,contact) => {
    if (err) {
        res.send(err);
    }
    res.json({message : 'successfully deleted contact'});
  })
}
