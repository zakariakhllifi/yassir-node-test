import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import pollution from "./api/pollution"
import http from "http"
import checkParisAirPollution from "./jobs/paris-air-quality"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/api/pollution", pollution);

const server = http.createServer(app);

checkParisAirPollution()

server.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});