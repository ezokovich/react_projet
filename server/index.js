const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route (endpoint)
app.get("/api", (req, res) => {
res.json({ message: "Bonjour depuis votre server!" });
});

// All other GET requests not handled will return our React app
app.get("*", (req, res) => {
res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});