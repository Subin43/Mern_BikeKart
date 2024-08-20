import express from "express";
import { Buy } from "../models/buyModels.js";

const router = express.Router();

router.post("/newBikes", async (req, res) => {
  try {
    const { image, name, yearOfBuy, kmDriven,brand, owner, price, emi, location } = req.body;
    
    if (!image || !name || !yearOfBuy || !kmDriven || !brand || !owner || !price || !emi || !location) {
      return res.status(400).send({ error: "Send all the required fields" });
    }
    
    const newBike = new Buy({
      image,
      name,
      yearOfBuy,
      kmDriven,
      brand,
      owner,
      price,
      emi,
      location
    });
    
    await newBike.save();
    res.status(201).json(newBike);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/bike", async (req, res) => {
  try {
    const allBikes = await Buy.find({});
    if (!allBikes.length) {
      return res.status(404).send({ error: "No Bikes found" });
    }
    return res.status(200).send({
      length: allBikes.length,
      data: allBikes
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/deleteBike/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBike = await Buy.findByIdAndDelete(id);
    if (!deleteBike) {
      return res.status(404).send({ error: "No Bike found" });
    }
    return res.status(200).send({ message: "Bike deleted" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/Bike/:id", async (req, res) => {
  try {
    const { image, name, yearOfBuy, kmDriven,brand, owner, price, emi, location } = req.body;
    
    if (!image || !name || !yearOfBuy || !kmDriven || !brand || !owner || !price || !emi || !location) {
      return res.status(400).send({ error: "Send all the required fields" });
    }
    
    const { id } = req.params;
    const updateBike = await Buy.findByIdAndUpdate(id, req.body, { new: true });
    if (!updateBike) {
      return res.status(404).send({ error: "No Bike found" });
    }
    return res.status(200).send({ message: "Bike updated", data: updateBike });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
