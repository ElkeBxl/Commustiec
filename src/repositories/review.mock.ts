import { ReviewRepository } from "./review";
import { Review } from "../models/review";

export class MockReviewRepository implements ReviewRepository {

    public getReviews(): Review[] {
        let reviews = new Array();

        reviews.push(new Review({ Artist: "Threat Signal", Album: "Disconnect", Rating: 4 }));

        reviews.push(new Review({ Artist: "Joe Stump", Album: "Speed Metal Messiah", Rating: 4 }));

        return reviews;
    }

}