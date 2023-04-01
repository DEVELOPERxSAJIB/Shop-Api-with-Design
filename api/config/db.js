import mongoose from "mongoose";

// create a mongoDb connection
const mongoDBConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected succesful`.bgBlue.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// export
export default mongoDBConnect;
