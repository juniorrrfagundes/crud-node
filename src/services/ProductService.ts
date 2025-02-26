import ProductRepository from '../repositoires/ProductRepository';
import { ProductResponse } from '../interface/ProductResponse';

class ProductService {
	private productRepository: ProductRepository;

	constructor() {
		this.productRepository = new ProductRepository();
	}

	public async insertProduct(data: { name: string; price: number }): Promise<ProductResponse> {
		return await this.productRepository.insertProduct(data);
	}

	public async searchProduct(): Promise<ProductResponse> {
		return await this.productRepository.searchProduct();
	}

	public async searchById(id: string): Promise<ProductResponse>{
		return await this.productRepository.searchById(id);
	}

}

export default ProductService;
