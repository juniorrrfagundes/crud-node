import { Product } from '../models/Product';

class ProductRepository {
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
}

export default ProductRepository;
