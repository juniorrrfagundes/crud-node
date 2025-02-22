import ProductRepository from '../repositoires/ProductRepository';

class ProductService {
	private productRepository: ProductRepository;

	constructor() {
		this.productRepository = new ProductRepository();
	}

	public async insertProduct(data: { name: string; price: number }): Promise<void> {
		this.productRepository.insertProduct(data);
	}
}

export default ProductService;
