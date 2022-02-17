const db = require("../db")

class UserController {

  async createUser(req, res) {
    const { name, surname } = req.body;
    const newPerson = await db.query("INSERT INTO person (name, surname) values ($1, $2) RETURNING *", [name, surname]);
                                 /* "RETURNING *" говорит нам о том, что после создания пользователя функция вернёт нам его,
                                     так как функция INSERT по умолчанию ни чего не возвращает */
    res.json(newPerson.rows[0]); // в получаемом объекте newPerson много данных, а нам нужен только объект с данными пользователя
  }

  async getUsers(req, res) {
    const users = await db.query("SELECT * from person");
    res.json(users.rows);
  }

  async getOneUser(req, res) {
    const { id } = req.params;
    const user = await db.query("select * from person where id = $1", [id]);
    res.json(user.rows);
  }

  async updateUser(req, res) {
    const { id, name, surname } = req.body;
    const newPerson = await db.query("UPDATE person SET name = $2, surname = $3 where id = $1 RETURNING *", [id, name, surname])
                              /* функция UPDATE также по умолчанию ни чего не возвращает,
                                 чтобы возвращала дописываем "RETURNING *"     */
    res.json(newPerson.rows);
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    await db.query(`DELETE FROM person where id = $1`, [id])
    res.json("Пользователь удалён")
  }

}

module.exports = new UserController();
