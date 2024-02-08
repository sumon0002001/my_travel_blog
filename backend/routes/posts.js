const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

//create
router.post("/create", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//update
router.put("/:id", async (req, res) => {
  try {
    const UpdatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(UpdatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json("Post has been deleted...");
  } catch (error) {
    res.status(500).json(error);
  }
});

//get
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get posts
router.get("/", async (req, res) => {
  const query = req.query;
  console.log(query);
  try {
    const filterSearch = {
      title: { $regex: query.search, $options: "i" },
    };
    const posts = await Post.find(query.search ? filterSearch : null);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
