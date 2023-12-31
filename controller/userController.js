const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    //Create a new User
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exist");
  }
});

const loginUserController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exist
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

//Update User 1:07:07

const updateOneUser = asyncHandler(async (req,res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, {
      firstname: req?.body?.firstname,
      lastname: req?.body?.lastname,
      email: req?.body?.email,
      mobile: req?.body?.mobile,
    }, 
    {
      new: true,

    });
    res.json(updatedUser)
  } catch (error) {
    
  }
}) 

//get all users

const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers)
  } catch (error) {
    throw new Error(error);
  }
});

//Get single user
const getUser = asyncHandler(async (req, res) => {
    console.log(req.params)
    const {id} = req.params;
    try {
        const getAUser = await User.findById(id);

        res.json(getAUser);
    } catch (error) {
        throw new Error(error);
    }
})

//delete user
const deleteOneUser = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const deleteOneUser = await User.findByIdAndDelete(id);

        res.json(deleteOneUser);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports = { 
  createUser, 
  loginUserController, 
  getallUser, 
  getUser, 
  deleteOneUser,
  updateOneUser
};
