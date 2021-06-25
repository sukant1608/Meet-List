const router = require("express").Router();
const handle = require("../handlers");

router.get("/:username", handle.getTasks);
router.post("/create", handle.createTask);
router.post("/delete", handle.deleteTask);

module.exports = router;
