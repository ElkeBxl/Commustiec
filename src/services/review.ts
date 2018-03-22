import { MockReviewRepository } from "../repositories/review.mock";
import { ReviewRepository } from "../repositories/review";
import { Review } from "../models/review";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";

@injectable()
export class ReviewService {

    public constructor(@inject(TYPES.ReviewRepository) private reviewRepository: ReviewRepository) {
        
    }

    public getReviews(): Review[] {
        return this.reviewRepository.getReviews();
    }
}