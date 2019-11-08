const express = require("express")
const router = express.Router()
const bodyParser = require('body-parser')
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
// router.get("/:id", controller.getById)
router.post("/criar", bodyParser.json(), controller.add)

module.exports = router
