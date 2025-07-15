// reusable log function
const axios = require("axios");

async function Log(stack, level, pkg, message, token) {
  try {
    await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      { stack, level, package: pkg, message },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("✅ Log sent:", message);
  } catch (err) {
    console.error("❌ Log failed:", err.response?.data || err.message);
  }
}

module.exports = { Log };
