import mongoose from "mongoose";

export function setUpConnection() {
    mongoose.connect(`mongodb://${process.env.DB_CONNECTION_STRING}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
        .then(() => console.log('Now connected to MongoDB!'))
        .catch(err => console.error('Something went wrong', err));
}