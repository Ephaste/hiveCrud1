
import { hive } from "../models/hiveModel";
  export const  createHive = async(req, res) =>{
    //try{
      let Hive = req.body;
      let newHive = await hive.create(Hive);
        
        console.log(newHive);
        res.status(201).json(newHive);
    //}catch(error){
      //res.status(500).json({ error: "Internal server error" });
    //}
  };
  
  
//GET ALL CASES
export const getAll = async (req, res) => {
  try {
    let allHives = await hive.find({});
    res.status(200).json(allHives);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//GET BY ID
export const getbyId = async (req, res) => {
    const hiveId = req.params.id; // Assuming the ID is passed as a URL parameter
  
    try {
      const HIVE = await hive.findById(hiveId);
  
      if (!HIVE) {
        return res.status(404).json({ error: "hive is not found" });
      }
  
      res.status(200).json(CASE);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  //UPDATE A CASE


  export const updateHive = async (req, res) => {
    const caseId = req.params.id; // Assuming the ID is passed as a URL parameter
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
  //DELETE A CASE
export const deleteHiveById = async (req, res) => {
  const caseId = req.params.id; // Assuming the ID is passed as a URL parameter

  try {
    const deletedHive = await hive.findByIdAndDelete(hiveId);

    if (!deletedHive) {
      return res.status(404).json({ error: "Hive not found" });
    }

    res.status(200).json({ message: "Hive deleted successfully", deletedCase });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
