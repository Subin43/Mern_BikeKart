import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import buyRoutes from "./routes/buyRoutes.js"
import sellRoutes from "./routes/sellRoutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

app.use(express.json());

const corsConfig = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
};

app.use(cors(corsConfig));
app.use("/buy",buyRoutes);
// app.use("/sell",sellRoutes);
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('App connected to database');
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
