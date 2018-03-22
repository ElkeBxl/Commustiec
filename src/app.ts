import * as express from "express";
import * as bodyParser from "body-parser";
import { Container, inject } from "inversify";
import "reflect-metadata";
import { ReviewController } from "./controllers/review";
import { TYPES } from "./types";
import { ReviewRepository } from "./repositories/review";
import { MockReviewRepository } from "./repositories/review.mock";
import { ReviewService } from "./services/review";

class App {

    constructor(private reviewController: ReviewController) {
        this.app = express();
        this.dependencyInjection();

        this.reviewController = this.diContainer.get<ReviewController>(TYPES.ReviewController);

        this.config();
        this.routes();
    }

    public app: express.Application;

    private diContainer: Container;

    private dependencyInjection(): void {
        this.diContainer = new Container();
        this.diContainer.bind<ReviewRepository>(TYPES.ReviewRepository).to(MockReviewRepository);
        this.diContainer.bind<ReviewService>(TYPES.ReviewService).to(ReviewService);
        this.diContainer.bind<ReviewController>(TYPES.ReviewController).to(ReviewController);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    
    private routes(): void {
        const router = express.Router();
    
        router.get('/', this.reviewController.get);

        router.post('/', this.reviewController.post);

        this.app.use('/', router)
    
    }

}

export default new App().app;