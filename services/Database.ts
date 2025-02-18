import mongoose from "mongoose";

class Database {
    public connectMongoDb(mongoUrl: string) : void {
        mongoose.connect(mongoUrl)
        .then(()=> {console.log('MongoDB connected!')})
        .catch(err => console.log(`Error in Connect MongoDB, ${err}`));
    }

}

export default Database;