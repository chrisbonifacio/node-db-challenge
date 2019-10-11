const express = require("express")

const router = express.Router()

const Resources = require("../resources/resourceModel")

router.get("/", async (req, res) => {
  try {
    const resources = await Resources.get()
    res.status(200).json(resources)
  } catch (error) {
    res.status(400).json({ errorMessage: "Could not retrieve resources" })
  }
})

router.post("/", async (req, res) => {
  const resourceData = req.body
  try {
    let [newResource] = await Resources.add(resourceData)
    res.status(201).json(newResource)
  } catch (error) {
    res.status(400).json({ errorMessage: "Could not add resource to database" })
  }
})

module.exports = router
