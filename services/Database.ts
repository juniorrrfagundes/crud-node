import mongoose from 'mongoose';
import { Product } from '../models/Product';

class Database {
	public async connectMongoDb(mongoUrl: string): Promise<void> {
		try {
			await mongoose.connect(mongoUrl);
			console.log('MongoDB connected!');
		} catch (err) {
			console.error(`Error in ${err}`);
			throw err;
		}
	}

	public async insertProduct(data: { name: string; price: number }): Promise<void> {
		try {
			const item = new Product(data);
			await item.save();
			console.log(`Product successfully registered!`);
		} catch (err) {
			console.error(`Error in ${err}`);
			throw err;
		}
	}

	// Only for Sample
	public connectMongoDbThen(mongoUrl: string): void {
		mongoose
			.connect(mongoUrl)
			.then(() => {
				console.log('MongoDB connected!');
			})
			.catch((err) => {
				console.error(`Error in ${err}`);
			});
	}
}

export default Database;
