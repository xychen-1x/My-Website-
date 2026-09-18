const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "my-platform",
    version: "0.1.0"
  });
});

app.get("/api/site", (req, res) => {
  res.json({
    name: "My Platform",
    status: "online"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Platform running on port ${PORT}`);
});
