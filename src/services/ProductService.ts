import ProductRepository from '../repositoires/ProductRepository';
import { IProduct } from '../models/Product';

class ProductService {
	private productRepository: ProductRepository;

	constructor() {
		this.productRepository = new ProductRepository();
	}

	public insertProduct(data: { name: string; price: number }): Promise<IProduct> {
		return this.productRepository.insertProduct(data);
	}

	public searchProduct(): Promise<IProduct[]> {
		return this.productRepository.searchProduct();
	}

	public searchById(id: string): Promise<IProduct | null> {
		return this.productRepository.searchById(id);
	}

	public deleteProduct(id: string): Promise<IProduct | null> {
		return this.productRepository.deleteProduct(id);
	}

	public updateProduct(id: string, data: Record<string, any>): Promise<IProduct | null> {
		return this.productRepository.updateProduct(id, data);
	}
}

export default ProductService;
