import { ReviewRepository } from "../repositories";
import { Review } from "../models";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";

@injectable()
export class ReviewService {

    public constructor(@inject(TYPES.ReviewRepository) private reviewRepository: ReviewRepository) {
        
    }

    public getReviews(): Review[] {
        return this.reviewRepository.getReviews();
    }

    public addReview(review: Review) {
        this.reviewRepository.addReview(review);
    }

    public deleteReview(review: Review) {
        this.reviewRepository.deleteReview(review);
    }
}