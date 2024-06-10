import mongoose from "mongoose";
const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/admin", {});
        console.log('Connection to MongoDB successful');
    }
    catch (error) { console.error('Error connecting to MongoDB:', error); }
};
export default dbconnect;

