const express = require("express");
const router = express.Router();
const { create,userGet,userUpdate,userDelete } = require("../Controller/client");
// const { randomBytes } = require("crypto");

router.post("/create", create);
router.get('/userGet',userGet)
router.put('/userUpdate',userUpdate)
router.delete('/userDelete',userDelete)
module.exports = router;
