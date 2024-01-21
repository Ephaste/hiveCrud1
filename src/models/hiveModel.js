import mongoose from "mongoose";
const hiveSchema = mongoose.Schema({

    HiveSN : String,
    HiveName: String,
    DeviceSN: String,
    HiveOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
      },
    HiveDimension: String,
    HiveWeight: String,
    HiveLocation: String,
    Description: String
});
export const hive =mongoose.model("hive", hiveSchema);
