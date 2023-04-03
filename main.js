import http from "http";
import mongoose from "mongoose";
import weatherDataSchema from "./schema.js";

const server = http.createServer(function (res, req) {
  console.log("server is running");
});

server.listen(8080);
mongoose
  .connect(
    `mongodb+srv://sabir:1234@cluster0.wkoexdd.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Server connected");

    connection();
  });

const location = {
  city: "Kolkata",
  state: "West Bengal",
};
const current = {
  tempC: 30,
  feelsC: 52,
};

async function connection() {
  await weatherDataSchema.create({ location, current });
}
