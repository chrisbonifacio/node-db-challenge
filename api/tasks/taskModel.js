const db = require("../../data/dbConfig")

module.exports = {
  get,
  getById,
  add
}

function get() {
  return db("tasks")
}

function getById() {}

async function add(task) {
  const [id] = await db("tasks").insert(task)

  return db("tasks")
    .select("*")
    .where({ id: id })
}
