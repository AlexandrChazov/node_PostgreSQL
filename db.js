const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "8441428Sasha",    // пароль заданный мной при установке PostgreSQL
  host: "localhost",
  port: 5432,                  // порт по умолчанию при установке PostgreSQL
  database: "node_postgres"    // имя нашей БД
})

module.exports = pool;
