import ProductController from '../controllers/ProductController';
import { Router } from 'express';

class ProductRoutes {
	private productController: ProductController;
	private router: Router;

	constructor() {
		this.productController = new ProductController();
		this.router = Router();
		this.InitializeRoutes();
	}

	private InitializeRoutes(): void {
		this.router.post('/insert', (req, res) => this.productController.insertProduct(req, res));
		this.router.get('/', (req, res) => {this.productController.searchProduct(req, res)});
		this.router.get('/:id', (req, res) => {this.productController.searchById(req, res)});
	}
	

	public getRoutes(): Router {
		return this.router;
	}
}

export default new ProductRoutes().getRoutes();
