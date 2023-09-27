import mongoose from 'mongoose';

let isConnected = false; // allows to track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('mongoDB is already connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGDOB_URU {
            dbname: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected=true;
        console.log('MongoDB connected')
    } catch(error) {
        console.log(error); 
    }
}
