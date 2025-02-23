const express = require("express");
const { getAttendees, getAttendeeById, registerAttendee, updateAttendee, deleteAttendee } = require("../controllers/attendeesController");
const router = express.Router();

// Ensure this is correctly set up for the "GET" method
router.get("/", getAttendees); 
router.post("/", registerAttendee);
router.get("/:id", getAttendeeById);
router.put("/:id", updateAttendee);
router.delete("/:id", deleteAttendee);

module.exports = router;
