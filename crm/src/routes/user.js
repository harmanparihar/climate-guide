const express = require('express')
const mongoose = require('mongoose');
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport')
router.post('/', (req, res) => {
  console.log('user signup');

  const {name, username, password } = req.body;
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log('User.js post error: ', err)
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${username}`
        })
      }
      else {
        const newUser = new User({
          name:     name,
          username: username,
          password: password
        })
        newUser.save((err, savedUser) => {
          if (err) return res.json(err)
            res.json(savedUser)
        })
      }
    })
  })

router.post(
  '/login',
  function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('logged in here are details', req.user);
    var userInfo = {
      username: req.user.username,
      name: req.user.name,
    };
    res.send(userInfo);
  }
  )

router.get('/', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  console.log('===== user!!======')
  if (req.user) {
    res.json({ user: req.user })
    console.log(req.user.username)

  } else {
    res.json({ user: null })
    console.log("user is undefined")

  }
})

router.post('/logout', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.user) {
    req.logout()
    res.send({ msg: 'logging out' })
  } else {
    res.send({ msg: 'no user to log out' })
  }
})

// GET request : http://localhost:8080/user/getusers
// Gives you a json object of all the users and their data
router.get('/getusers', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  User.find({}, (err, userdata) => {
      if (err) {
          res.send({msg:'Could not fetch user data'});
      }
      res.json(userdata);
  });
});

// DELTE request : http://localhost:8080/user/userId
// Deletes the record of user with given user id
router.delete('/:userId', (req, res) => {
  User.remove({ _id: req.params.userId}, (err, userdata) => {
      if (err) {
          res.send(err);
      }
      res.send({msg:'Users deleted successfully'});
  });
})
module.exports = router
