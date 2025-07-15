const axios = require("axios");

async function authenticate() {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/auth", {
      email: "partho.dutta2004@gmail.com",
      name: "Partho Dutta",
      rollNo: "2294052",
      accessCode: "QAhDUr",
      clientID: "cc1a70ac-1a97-4229-b775-03bc69c7afbc",
      clientSecret: "aezjJKbCzQCJrUSN"
    });

    console.log("✅ Authentication Successful:");
    console.log("Access Token:", response.data.access_token);
  } catch (error) {
    if (error.response?.data) {
      console.error("❌ Auth failed:", error.response.data);
    } else {
      console.error("❌ Error:", error.message);
    }
  }
}

authenticate();
