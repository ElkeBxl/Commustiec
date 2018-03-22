import { MockReviewRepository } from "../repositories/review.mock";
import { ReviewRepository } from "../repositories/review";
import { Review } from "../models/review";

export class ReviewService {

    private reviewRepository: ReviewRepository;

    public constructor() {
        this.reviewRepository = new MockReviewRepository();
    }

    public getReviews(): Review[] {
        return this.reviewRepository.getReviews();
    }
}