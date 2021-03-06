//  DEPENDENCIES
const express = require("express");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const {
    firstname,
    lastname,
    password,
    username,
    email,
    address,
    city,
    state,
    zip,
  } = req.body;

  // Check for required fields
  if (
    !firstname ||
    !lastname ||
    !password ||
    !username ||
    !email ||
    !address ||
    !city ||
    !state ||
    !zip
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //  Create newUser
  const newUser = await User.create({
    username,
    password: hashedPassword,
    email,
    address,
    firstname,
    lastname,
    city,
    state,
    zip,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser.id,
      name: newUser.username,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const newUser = await User.findOne({ email });

  if (newUser && (await bcrypt.compare(password, newUser.password))) {
    res.json({
      _id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// This route is not in use currently
const getUser = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    username,
    email,
  });
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
};
