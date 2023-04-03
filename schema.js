import mongoose from "mongoose";
const weatherDataSchema = new mongoose.Schema({
  location: {
    city: String,
    state: String,
  },
  current:{
    tempC:Number,
    feelsC:Number
  }
});

export default mongoose.model("weatherData", weatherDataSchema);
