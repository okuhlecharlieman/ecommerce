const connectDatabase = require("./db/Database");
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for handiling uncaughtException`);
});

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/.env" });
  console.log(".env activated!!!");
}
//Connect db
connectDatabase();

//Create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for handiling unhandledRejection`);

  server.close(() => {
    process.exit(1);
  });
});
