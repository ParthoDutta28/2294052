const express = require("express");
const { Log } = require("./logger/logger");

const app = express();
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwYXJ0aG8uZHV0dGEyMDA0QGdtYWlsLmNvbSIsImV4cCI6MTc1MjU2MDAxOSwiaWF0IjoxNzUyNTU5MTE5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNmI2Y2FiYjgtNDMzNS00ZTllLWEwZWUtNDhmNTU1MjYwZWExIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicGFydGhvIGR1dHRhIiwic3ViIjoiY2MxYTcwYWMtMWE5Ny00MjI5LWI3NzUtMDNiYzY5YzdhZmJjIn0sImVtYWlsIjoicGFydGhvLmR1dHRhMjAwNEBnbWFpbC5jb20iLCJuYW1lIjoicGFydGhvIGR1dHRhIiwicm9sbE5vIjoiMjI5NDA1MiIsImFjY2Vzc0NvZGUiOiJRQWhEVXIiLCJjbGllbnRJRCI6ImNjMWE3MGFjLTFhOTctNDIyOS1iNzc1LTAzYmM2OWM3YWZiYyIsImNsaWVudFNlY3JldCI6ImFlempKS2JDelFDSnJVU04ifQ.3LKC3fU-N7GcHHEX-evPlOwNUfsnh1HnW7pPY0sOAHY"; 

app.get("/", async (req, res) => {
  await Log("backend", "info", "route", "Root route accessed", ACCESS_TOKEN);
  res.send("Hello from the server!");
});

app.listen(3000, () => {
  Log("backend", "info", "config", "Server started on port 3000", ACCESS_TOKEN);
});
