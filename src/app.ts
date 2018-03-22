import * as express from "express";
import * as bodyParser from "body-parser";
import { Container, inject } from "inversify";
import "reflect-metadata";
import { ReviewController } from "./controllers";
import { TYPES } from "./types";
import { ReviewRepository, MockReviewRepository } from "./repositories";
import { ReviewService } from "./services";
import MyIocContainer from "./iocconfig";

class App {

    constructor() {
        this.app = express();
        this.dependencyInjection();
        this.config();
        this.routes();
    }

    public app: express.Application;

    private diContainer: Container;

    private reviewController: ReviewController;

    private dependencyInjection(): void {
        this.diContainer = MyIocContainer.configure();
        this.reviewController = this.diContainer.get<ReviewController>(TYPES.ReviewController);
    }

    private config(): void {
        const path = require('path');
        this.app.use(express.static(path.join(__dirname, '../public')));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        // this.app.use(bodyParser.json());
        // this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    
    private routes(): void {
        const router = express.Router();
    
        router.get('/', this.reviewController.get);
        router.get('/create', this.reviewController.createGet);
        router.post('/create', this.reviewController.createPost);

        this.app.use('/', router)
    
    }

}

export default new App().app;