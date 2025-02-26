import { Product } from '../models/Product';
import { ProductResponse } from '../interface/ProductResponse';

class ProductRepository {
	public async insertProduct(data: { name: string; price: number }): Promise<ProductResponse> {
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

	public async searchProduct(): Promise<ProductResponse> {
		try {
			const result = await Product.find();
			console.log('Products successfully searched!');
			return { success: true, data: result };
		} catch (error) {
			console.error(`Error searching products: ${error}`);
			return { success: false, error: 'Unknown error occurred' };
		}
	}

	public async searchById(id: string): Promise<ProductResponse> {
		try {
			const result = await Product.findById(id);
			console.log('Search by id successfully!');
			return { success: true, data: result };
		} catch (error) {
			console.log(`Error in search by id, ${error}`);
			return { success: false, error: error };
		}
	}
}

export default ProductRepository;
