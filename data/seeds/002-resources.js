exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "MDN", description: "mozilla developer network" },
        { name: "Redux", description: "state management system for React" },
        {
          name: "Axios",
          description: "promise based http client for the browser and node.js"
        }
      ])
    })
}
