require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 4000;
const localHost = "127.0.0.1";

app.listen(PORT, localHost, () => {
  console.log(`the server is running in : http://${localHost}:${PORT}`);
});
