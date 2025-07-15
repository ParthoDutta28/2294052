const axios = require("axios");

async function register() {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/register", {
      email: "partho.dutta2004@gmail.com",        
      name: "Partho Dutta",                
      mobileNo: "7451060952",             
      githubUsername: "ParthoDutta28",            
      rollNo: "2294052",                    
      accessCode: "QAhDUr"               
    });

    console.log("Registered successfully:");
    console.log("Client ID:", response.data.clientID);
    console.log("Client Secret:", response.data.clientSecret);

  } catch (err) {
    if (err.response?.data) {
      console.error(" Registration failed:", err.response.data);
    } else {
      console.error("Error:", err.message);
    }
  }
}

register();
