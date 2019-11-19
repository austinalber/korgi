const express = require("express");
const router = express.Router();
// Load input validation
const validatePostInput = require("../../validation/cards");
// Load Card model
const Card = require("../../models/Card");

// Get all cards by id
router.get("/card", (req, res) => {
    const id = req.body._id;
    console.log(id);
    let arr = []
    Card.findOne({ id })
        .then(card => {
        if(!card) return res.status(406).json({ message: "Card not found" });
        else {
            console.log(card);
            arr.push(card);
        }
        return arr;
    });
});
// Get all cards
router.get("/all-cards", (req, res) => {
    Card.find({ }).then(card => {
      if(!card) return res.status(406).json({message: "Card not found"});
      else { 
        // console.log(card);
        res.send(card);
      }
    })
  });
// Post card
router.post("/card", (req, res) => {
    // Form validation
    const { errors, isValid } = validatePostInput(req.body);
    // Check validation
    if(!isValid) return res.status(400).json(errors);
    const newPost = new Card({
        userId: req.body.userId,
        userImage: req.body.userImage,
        postImage: req.body.postImage,
        caption: req.body.caption,
        location: req.body.location
    });
    // Save post in database
    newPost.save()
        .then(card => res.json(card))
        .catch(err => console.log(err));
    // Card.findOne({ id: req.body._id }).then(card => {
    //     if(!card) return res.status(400).json({ id: "Post id already exists" });
    //     else {
    //         const newPost = new Card({
    //             userId: req.body.userId,
    //             userImage: req.body.userImage,
    //             postImage: req.body.postImage,
    //             caption: req.body.caption,
    //             location: req.body.location
    //         });
    //         // Save post in database
    //         newPost.save()
    //             .then(card => res.json(card))
    //             .catch(err => console.log(err));
    //     }
    // });
});

module.exports = router;