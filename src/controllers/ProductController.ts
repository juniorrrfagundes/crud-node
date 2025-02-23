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
			if (result.success) {
				res.status(201).json({
					message: 'Product successfully registered!',
					product: result,
				});
			} else {
				res.status(500).json({ message: 'Error registering product!', product: result });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Unexpected error', error });
		}
	}
}

export default ProductController;
