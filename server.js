const express = require("express")

const server = express()

const projectsRouter = require("./api/projects/projectsRouter")
const resourceRouter = require("./api/resources/resourceRouter")

server.use(express.json())

server.use("/api/projects", projectsRouter)
server.use("/api/resources", resourceRouter)

module.exports = server
