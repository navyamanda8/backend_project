const supabase = require("../db");

// Get all events
const getEvents = async (req, res) => {
  const { data, error } = await supabase.from("event_details").select("*");
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Create event
const createEvent = async (req, res) => {
  const { event_name, event_image, description, date, location, no_of_tickets, general_tickets, vip_tickets, early_bird_tickets, general_ticket_price, vip_ticket_price, early_bird_ticket_price, genre_id, organizer_id } = req.body;

  const { data, error } = await supabase.from("event_details").insert([{ event_name, event_image, description, date, location, no_of_tickets, general_tickets, vip_tickets, early_bird_tickets, general_ticket_price, vip_ticket_price, early_bird_ticket_price, genre_id, organizer_id }]).select();
  
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Update event
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;
  const { data, error } = await supabase.from("event_details").update(updatedFields).eq("event_id", id);
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Delete event
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("event_details").delete().eq("event_id", id);
  if (error) return res.status(500).json(error);
  res.json({ message: "Event deleted successfully" });
};

// ✅ Export as CommonJS module
module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
