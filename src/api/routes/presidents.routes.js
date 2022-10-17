const express = require("express"); 

const router = express.Router ();

const {getAllPresidents, getPresident, getTheParty, getThePresident, postNewPresidents, putPresidents, deletePresidents} = require ("../controllers/presidents.controllers");

router.get("/", getAllPresidents);
router.get("/:id", getPresident);
router.get("/president/:number", getThePresident);
router.get("/party/:party", getTheParty);
router.post("/", postNewPresidents);
router.put("/:id", putPresidents);
router.delete("/:id", deletePresidents);

module.exports = router;