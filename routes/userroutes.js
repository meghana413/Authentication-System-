const express = require("express");
const {
  handleUserSignUp,
  handleUserLogin,
  getProfile,
  deleteUser,
  handleGetUsers,
} = require("../controllers/usercontrollers");
const { authmiddleware, isAdmin } = require("../middlewares/authmiddleware");

const router = express.Router();

router.post("/signup", handleUserSignUp).post("/Login", handleUserLogin);
router
  .get("/profile", authmiddleware, getProfile)
  .get("/", authmiddleware, isAdmin, handleGetUsers);
router.delete("/:id", authmiddleware, isAdmin, deleteUser);

module.exports = router;
