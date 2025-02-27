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

	public delete(id: string): Promise<IProduct | null> {
		return this.productRepository.delete(id);
	}
}

export default ProductService;
