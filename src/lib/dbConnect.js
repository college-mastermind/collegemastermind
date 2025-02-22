
import mongoose from 'mongoose';

let isConnected = false; 
const dbConnect = async () => {
    if (isConnected) {
        console.log('=> Using existing database connection');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = db.connections[0].readyState === 1; // 1 means connected
        console.log('=> New database connection established');
    } catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Failed to connect to the database');
    }
};

export default dbConnect;
