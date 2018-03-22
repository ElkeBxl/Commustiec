import { Container } from "inversify";
import { ReviewRepository, MockReviewRepository } from "./repositories";
import { ReviewService } from "./services";
import { ReviewController } from "./controllers";
import { TYPES } from "./types";

export default class MyIocContainer {
    static configure(){ 
        let diContainer = new Container();
        diContainer.bind<ReviewRepository>(TYPES.ReviewRepository).to(MockReviewRepository);
        diContainer.bind<ReviewService>(TYPES.ReviewService).to(ReviewService);
        diContainer.bind<ReviewController>(TYPES.ReviewController).to(ReviewController);
        return diContainer;
    }
  }