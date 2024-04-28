import mongoose from 'mongoose';

export const connectDB = async (dbName) => {
    const uri = 'mongodb://127.0.0.1:27017/' + dbName;
    try {
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};