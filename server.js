import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dbconnect from "./db.js";
import ModelWeather from "./hschema.js";

const app = express()
app.use(cors());
app.use(bodyParser.json());

dbconnect();

app.post('/api/History', async (req, res) => {
    try {
      const newSearch = new ModelWeather(req.body);
      await newSearch.save();
      res.status(201).send(newSearch);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  app.get('/api/History', async (req, res) => {
    try {
      const historyData = await ModelWeather.find();
      res.status(200).send(historyData);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });