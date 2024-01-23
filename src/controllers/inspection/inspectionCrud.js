



import { hive } from "../../models/hiveModel.js";
import { User } from "../../models/userModel.js";
import { generateToken } from "../../utils/jwtFunction.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import {inspection} from "../../models/inspectionModel.js";
import jwt from 'jsonwebtoken';

  export const createInspection = async (req, res) => {
    try {
        // Check the user token using the verifyToken middleware
        verifyToken(req, res, async () => {
            const inspectionData = req.body;
            req.body.userId = req.userId
            const newInspection = await inspection.create(inspectionData);

            console.log(newInspection);
            res.status(201).json(newInspection);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
  
//GET ALL HIVES
export const getAllInspections = async (req, res) => {
  try {
    // Call the verifyToken middleware to extract user ID from the token
    verifyToken(req, res, async () => {
      // User ID is now available in req.userId from verifyToken middleware
      const userId = req.userId;
      // Find hives created by the user
      let userHives = await hive.find({ userId: userId }).populate('HiveOwner');
      //let userHives = await Hive.find({ HiveOwner: userId }).populate('HiveOwner');

      res.status(200).json(userHives);
    });
  } catch (error) {
    // Handle token verification or database errors
    res.status(500).json({ error: "Internal server error" });
  }
};

