import ProductRepository from '../repositoires/ProductRepository';
import { InsertProductResponse } from '../interface/InsertProductResponse';

class ProductService {
	private productRepository: ProductRepository;

	constructor() {
		this.productRepository = new ProductRepository();
	}

	public async insertProduct(data: {
		name: string;
		price: number;
	}): Promise<InsertProductResponse> {
		return await this.productRepository.insertProduct(data);
	}
}

export default ProductService;
