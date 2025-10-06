import express from "express";
import cors from "cors";
import houseRoutes from "./routes/house.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/houses", houseRoutes);

export default app;