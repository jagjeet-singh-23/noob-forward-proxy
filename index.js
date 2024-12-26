const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: ".env.local" });
const rateLimit = require("express-rate-limit");

const PORT = process.env.PORT || 8080;

const app = express();
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // 5 requests,
});

// enable rate limiting
app.use(limiter);
app.set("trust proxy", 1);

// Routes
app.use("/api", require("./routes/"));
// Handle cors
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
