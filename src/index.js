import dotenv from "dotenv";
import connect_DB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});
connect_DB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
    });
    app.listen(3000, () => {
      console.log("app is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("MONGO db connection fails !!!", err);
  });
