const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

//routes GET && POST
router
  .route("/")
  .get(postControllers.getAllPost)
  .post(postControllers.createNewPost);

router.route("/:id").get(postControllers.getPostById);

module.exports = router;
