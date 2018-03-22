import { Review } from "../models/review";

export interface ReviewRepository {
    getReviews(): Review[];
}