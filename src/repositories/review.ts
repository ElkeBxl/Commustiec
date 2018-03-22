import { Review } from "../models";

export interface ReviewRepository {
    getReviews(): Review[];

    addReview(review: Review);
}