// controllers/usersController.js
const supabase = require("../db");

// Get all users
const getUsers = async (req, res) => {
  const { data, error } = await supabase.from("user_details").select("*");
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Get a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase.from("user_details").select("*").eq("user_id", id).single();
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Create a new user
const createUser = async (req, res) => {
  const { user_name, email, password, role, user_image } = req.body;
  const { data, error } = await supabase.from("user_details").insert([{ user_name, email, password, role, user_image }]).select();
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;
  const { data, error } = await supabase.from("user_details").update(updatedFields).eq("user_id", id);
  if (error) return res.status(500).json(error);
  res.json(data);
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("user_details").delete().eq("user_id", id);
  if (error) return res.status(500).json(error);
  res.json({ message: "User deleted successfully" });
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
