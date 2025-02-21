import express from 'express';
import Database from '../services/Database';

class App {
	private app: express.Application;
	private dataBase: Database;
	private port: number;
	private mongoUrl: string;

	constructor() {
		this.app = express();
		this.dataBase = new Database();
		this.port = 3333;
		this.mongoUrl = 'mongodb://localhost:27017/store';

		this.config();
		this.appRoutes();
	}

	private config(): void {
		this.app.use(express.json());
	}

	private appRoutes(): void {
		this.app.get('/server', (req, res) => {
			res.send('Servidor rodando!');
		});
	}

	private async connectMongoDb(): Promise<void> {
		await this.dataBase.connectMongoDb(this.mongoUrl);
	}

	public async run(): Promise<void> {
		try {
			await this.connectMongoDb();
			this.app.listen(this.port, () => {
				console.log(`Server online in http://localhost:${this.port}/server`);
			});
		} catch (err) {
			console.error(`Error in ${err}`);
		}
	}
}
[];
const app = new App();
app.run();
