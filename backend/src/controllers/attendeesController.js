const supabase = require("../db");

// Get all attendees
const getAttendees = async (req, res) => {
  const { data, error } = await supabase.from("attendee_details").select("*");
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Get an attendee by ID
const getAttendeeById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("attendee_details").select("*").eq("attendee_id", id).single();
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Register a new attendee
const registerAttendee = async (req, res) => {
  const { user_id, event_id, name, email, phone, gender, dob } = req.body;
  
  const { data, error } = await supabase.from("attendee_details").insert([{ user_id, event_id, name, email, phone, gender, dob }]).select();
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Update an attendee's details
const updateAttendee = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  const { data, error } = await supabase.from("attendee_details").update(updatedFields).eq("attendee_id", id);
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Delete an attendee
const deleteAttendee = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("attendee_details").delete().eq("attendee_id", id);
  if (error) return res.status(500).json(error);
  res.json({ message: "Attendee deleted successfully" });
};

module.exports = { getAttendees, getAttendeeById, registerAttendee, updateAttendee, deleteAttendee };
