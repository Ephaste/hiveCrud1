import mongoose from "mongoose";
const hiveSchema = mongoose.Schema({
    category: String,
    owner: String,
    size: String,
    mass: String,
    location: String

});
export const hive =mongoose.model("hive", hiveSchema);
