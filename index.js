import dotenv from "dotenv";
dotenv.config();
import express from "express";
import vaariantRoutes from "./routes/variantsRoute.js";
import mandalRoutes from "./routes/mandalRoute.js";
const app = express();

//middlewares
app.use(express.json());

//end Points
app.use("/api", vaariantRoutes);
app.use("/api", mandalRoutes);

//port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("listening on");
});

