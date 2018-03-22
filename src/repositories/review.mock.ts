import { ReviewRepository } from "./review";
import { Review } from "../models";
import { injectable } from "inversify";

@injectable()
export class MockReviewRepository implements ReviewRepository {

    private reviews = new Array();

    public constructor() {
        this.reviews.push(new Review({ Artist: "Threat Signal", Album: "Disconnect", Rating: 4 }));
        this.reviews.push(new Review({ Artist: "Joe Stump", Album: "Speed Metal Messiah", Rating: 4 }));
    }

    public getReviews(): Review[] {
        return this.reviews;
    }

    public addReview(review: Review) {
        this.reviews.push(review);
    }

}