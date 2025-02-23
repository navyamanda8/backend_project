const express = require("express");
const cors = require("cors");
const eventRoutes = require("./routes/events");  
const userRoutes = require("./routes/users");   
const attendeeRoutes = require("./routes/attendees");  // Ensure path is correct

const app = express();

app.use(express.json());
app.use(cors());

// Register the "/attendees" route
app.use("/attendees", attendeeRoutes);  // Make sure "/attendees" is being handled

app.use("/events", eventRoutes);  
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
