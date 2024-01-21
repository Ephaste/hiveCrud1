



import { hive } from "../../models/hiveModel.js";
import { User } from "../../models/userModel.js";
import { generateToken } from "../../utils/jwtFunction.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import jwt from 'jsonwebtoken';
  // export const  createHive = async(req, res) =>{
  //   try{  
  //     let Hive = req.body;
  //     let newHive = await hive.create(Hive);
        
  //       console.log(newHive);
  //       res.status(201).json(newHive);
  //   }catch(error){
  //   res.status(500).json({ error: "Internal server error" });
  //   }
  // };
  export const createHive = async (req, res) => {
    try {
        // Check the user token using the verifyToken middleware
        verifyToken(req, res, async () => {
            const hiveData = req.body;
            req.body.HiveOwner = req.userId
            const newHive = await hive.create(hiveData);

            console.log(newHive);
            res.status(201).json(newHive);
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
  
//GET ALL HIVES
export const getAll = async (req, res) => {
  try {
    // Call the verifyToken middleware to extract user ID from the token
    verifyToken(req, res, async () => {
      // User ID is now available in req.userId from verifyToken middleware
      const userId = req.userId;
      // Find hives created by the user
      let userHives = await hive.find({ HiveOwner: userId }).populate('HiveOwner');
      //let userHives = await Hive.find({ HiveOwner: userId }).populate('HiveOwner');

      res.status(200).json(userHives);
    });
  } catch (error) {
    // Handle token verification or database errors
    res.status(500).json({ error: "Internal server error" });
  }
};



// export const getAll = async (req, res) => {
//   //try {
//     // Call the verifyToken middleware to extract user ID from the token
//     verifyToken(req, res, async () => {
//       // User ID is now available in req.userId from verifyToken middleware
//       const userId = req.userId;
//       console.log("uwakoze umuzinga@@@@@@@@@@",userId);
//       // Find hives created by the user
//       let userHives = await hive.find({ createdBy: userId });
//       console.log("ninde????", userId);
//       res.status(200).json(userHives);
//     });
//     console.log(userHives);
//   //} catch (error) {
//     // Handle token verification or database errors
//    // res.status(500).json({ error: "Internal server error" });
//   //}
//};





// export const getAll = async (req, res) => {

//   try {
//     let allHives = await hive.find({});
//     res.status(200).json(allHives);
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

//GET BY ID
export const getbyId = async (req, res) => {
    const hiveId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const HIVE = await hive.findById(hiveId);
  
      if (!HIVE) {
        return res.status(404).json({ error: "hive is not found" });
      }
  
      res.status(200).json(HIVE);
   } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  //UPDATE A CASE


  export const updateHive = async (req, res) => {
    const hiveId = req.params.id; // Assuming the ID is passed as a URL parameter
    const updatedData = req.body;
  
    try {
      const foundHive = await hive.findById(hiveId);
  
      if (!foundHive) {
        return res.status(404).json({ error: "hive not found" });
      }
  
      // Update the foundCase object with the provided data
      Object.assign(foundHive, updatedData);
  
      // Save the updated case
      const updatedHive = await foundHive.save();
  
      res.status(200).json(updatedHive);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  //DELETE A HIVE
export const deleteHiveById = async (req, res) => {
  const hiveId = req.params.id; // Assuming the ID is passed as a URL parameter
console.log("umuzinga tugiye gusiba",hiveId);
  try {
    const deletedHive = await hive.findByIdAndDelete(hiveId);

    if (!deletedHive) {
      return res.status(404).json({ error: "Hive not found" });
    }

    res.status(200).json({ message: "Hive deleted successfully", deletedHive });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
