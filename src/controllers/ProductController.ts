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
			res.status(500).json({ message: 'Unexpected error' });
		}
	}

	public async searchProduct(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.productService.searchProduct();
			res.status(200).json({ product: result });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Unexpected error' });
		}
	}

	public async searchById(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.productService.searchById(req.params.id);
			res.status(200).json({ product: result });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Unexpected error' });
		}
	}

	public async delete(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.productService.delete(req.params.id);
			result
				? res.status(200).json({ product: result })
				: res.status(404).json({ message: 'Produto não encontrado' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Unexpected error' });
		}
	}
}

export default ProductController;
