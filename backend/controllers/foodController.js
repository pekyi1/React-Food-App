import foodModel from "../models/foodModel.js";

const addFood = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        
        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: "default-image.jpg"
        });

        const savedFood = await food.save();
        res.status(201).json({
            success: true, 
            message: "Food Added",
            food: savedFood
        });
    } catch (error) {
        console.log("Error in addFood:", error);
        res.status(400).json({
            success: false, 
            message: error.message || "Error adding food"
        });
    }
}

export {
    addFood
}