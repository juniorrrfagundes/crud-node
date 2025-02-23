import { Product } from '../models/Product';
import { InsertProductResponse } from '../interface/InsertProductResponse';

class ProductRepository {
	public async insertProduct(data: {
		name: string;
		price: number;
	}): Promise<InsertProductResponse> {
		try {
			const item = new Product(data);
			await item.save();
			console.log(`Product successfully registered!`);
			return { success: true, data: item };
		} catch (err) {
			console.error(`Error in ${err}`);
			return { success: false, error: 'Unknown error occurred' };
		}
	}
}

export default ProductRepository;
