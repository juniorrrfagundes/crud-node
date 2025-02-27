import { Product, IProduct } from '../models/Product';

class ProductRepository {
	public async insertProduct(data: { name: string; price: number }): Promise<IProduct> {
		try {
			const item = new Product(data);
			await item.save();
			console.log(`Product successfully registered!`);
			return item;
		} catch (error) {
			console.error(`Error in ${error}`);
			throw error;
		}
	}

	public async searchProduct(): Promise<IProduct[]> {
		try {
			const result = await Product.find();
			console.log('Products successfully searched!');
			return result;
		} catch (error) {
			console.error(`Error searching products: ${error}`);
			throw error;
		}
	}

	public async searchById(id: string): Promise<IProduct | null> {
		try {
			const result = await Product.findById(id);
			console.log('Search by id successfully!');
			return result;
		} catch (error) {
			console.log(`Error in search by id, ${error}`);
			throw error;
		}
	}

	public async delete(id: string): Promise<IProduct | null> {
		try {
			const result = await Product.findOneAndDelete({ _id: id });
			console.log('Delete successfully!');
			return result;
		} catch (error) {
			console.log(`Error in delete, ${error}`);
			throw error;
		}
	}
}

export default ProductRepository;
