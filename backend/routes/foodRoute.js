import express from "express"
import { addFood } from "../controllers/foodController.js"

const foodRouter = express.Router();

foodRouter.post("/add", (req, res) => {
    console.log("Request received"); // Debug log
    console.log("Request body:", req.body); // Debug log
    
    // Validate required fields
    const { name, description, price, category } = req.body;
    if (!name || !description || !price || !category) {
        return res.status(400).json({
            success: false,
            message: "Missing required fields",
            received: req.body
        });
    }
    
    addFood(req, res);
});

export default foodRouter;