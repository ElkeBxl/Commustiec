import * as express from "express";
import * as bodyParser from "body-parser";
import { ReviewController } from "./controllers/review";

class App {

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public app: express.Application;

    private reviewController: ReviewController;

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    
    private routes(): void {
        const router = express.Router();
    
        this.reviewController = new ReviewController(router);
    
        this.app.use('/', router)
    
    }

}

export default new App().app;