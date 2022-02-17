const Router = require("express");
const postController = require("../controller/post.controller.js");
const router = new Router();

router.post("/post", postController.addPost)
router.get("/post", postController.getPostByUser)

module.exports = router;
