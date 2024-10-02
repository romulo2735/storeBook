import mongoose from "mongoose";

async function conn() {
    await mongoose.connect(process.env.DB_MONGO_CONNECTION);
    return mongoose.connection;
}

export default conn;