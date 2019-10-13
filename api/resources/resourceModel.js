const db = require("../../data/dbConfig")

module.exports = {
  get,
  getById,
  add
}

function get() {
  return db("resources")
}

function getById(id) {
  return db("resources")
    .select("*")
    .where({ id })
}

async function add(resource) {
  const [id] = await db("resources").insert(resource)

  return db("resources")
    .select("*")
    .where({ id: id })
}
