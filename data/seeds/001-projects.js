exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Sprint Challenge",
          description: "create a database and API",
          completed: false
        },
        {
          name: "TL Hours",
          description: "Help students understand material",
          completed: false
        },
        {
          name: "Flexbox Project",
          description:
            "create a responsive webpage using flexbox and media queries",
          completed: true
        }
      ])
    })
}
