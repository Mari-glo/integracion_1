import mongoose from "mongoose";

const MONGO_URI = ("mongodb+srv://mariD:NOTpwuJtPwyuWFeU@cluster0.nn1ed1f.mongodb.net/ecommerce?retryWrites=true&w=majority")

export const mongoDBConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Conectado a la base de datos de MongoDB");
  } catch (error) {
    console.log(error);
  }
};
