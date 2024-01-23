import mongoose from "mongoose";
const inspectionSchema = mongoose.Schema({

  userId :{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User',
  required: false,
    },
  hiveId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hive',
    required: false,
},
 temperature: String,
 humidity: String,
 weight: String,
 soundIntensity: String,
 healthStatus: String,
 inspectionNote: String
});
export const inspection =mongoose.model("inspection", inspectionSchema);
