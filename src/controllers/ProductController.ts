import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

class ProductController {
	private productService: ProductService;

	constructor() {
		this.productService = new ProductService();
	}

	public async insertProduct(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.productService.insertProduct(req.body);
			res.status(201).json({
				message: 'Product successfully registered!',
				product: result,
			});
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Unexpected error', error });
		}
	}

	public async searchProduct(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.productService.searchProduct();
			res.status(200).json({ product: result });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Unexpected error', error });
		}
	}

	public async searchById(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.productService.searchById(req.params.id);
			res.status(200).json({ product: result });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Unexpected error', error });
		}
	}
}

export default ProductController;
