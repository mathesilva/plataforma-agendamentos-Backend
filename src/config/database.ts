import  mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config()

export const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB conectado com sucesso!');
}   catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error);
}
};

export default connectDB;