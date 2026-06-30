const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup controller
async function handleUserSignUp(req, res) {
  const body = req.body;
  // console.log(body);
  // console.log("Headers:", req.headers);
  // console.log("Body:", req.body);
  try {
    const { username, email, password } = req.body;
    const checkOldUser = await User.findOne({ email });

    if (checkOldUser) {
      return res.status(400).json({
        message: "User already Exists!!",
      });
    }
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Please fill all the required fields",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Passwod must be atleast 8 characters long",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
// Login controller
async function handleUserLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    if (!email || !password) {
      return res.status(400).json({
        message: "Please fill all the required fields",
      });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "5h",
      },
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

// getprofile
const getProfile = (req, res) => {
  res.status(200).json({
    message: "Welcome!",
    user: req.user,
  });
};

// delete user controller for admin only
async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
      userId: user._id,
    });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
}

// get all users for admin only
async function handleGetUsers(req, res) {
  const users = await User.find().select("-password");
  return res.status(200).json(users);
}
module.exports = {
  getProfile,
  handleUserSignUp,
  handleUserLogin,
  deleteUser,
  handleGetUsers,
};
