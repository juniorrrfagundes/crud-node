import mongoose from "mongoose";

class Database {
    public async connectMongoDb(mongoUrl: string) : Promise<void> {
        try {
            await mongoose.connect(mongoUrl);
            console.log("MongoDB connected!");    
        }   catch (err) {
                console.error(`Error in ${err}`);
                throw err;
            }
    }

    // Only for Sample
    public connectMongoDbThen(mongoUrl: string) : void {
        mongoose.connect(mongoUrl)
        .then(() => {console.log("MongoDB connected!")})
        .catch(err => {console.error(`Error in ${err}`)})
    }

}

export default Database;