const db = require("../db.js");

class PostController {

  async addPost(req, res) {
    const { title, content, user_id} = req.body;
    const post = await db.query("INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *", [title, content, user_id])
    res.json(post.rows[0])
  }

  async getPostByUser(req, res) {
    const id = req.query.id         // id передаётся как параметр в строке запроса "http://localhost:8080/api/post?id=3"
    const userPosts = await db.query("SELECT * from post where user_id = $1", [id])
    res.json(userPosts.rows)
  }

}

module.exports = new PostController();
