import { expect } from 'chai';
import "reflect-metadata";
import 'mocha';
import { MockReviewRepository } from '.';
import { Review } from '../models';

describe('Review mock repository', () => {

    let repository: MockReviewRepository;

    before(() => {
        this.repository = new MockReviewRepository();
    });

    it('should have some mock data', () => {
        let reviews = this.repository.getReviews();

        expect(reviews).to.not.be.null;
        expect(reviews.length).to.be.greaterThan(0);
    });

    it('should be possible to add reviews', () => {
        let currentReviewsAmount = this.repository.getReviews().length;

        let newReview1: Review = new Review({Album: "Album1", Artist: "Artist1"});
        let newReview2: Review = new Review({Album: "Album2", Artist: "Artist2"});
        let newReview3: Review = new Review({Album: "Album3", Artist: "Artist3"});

        this.repository.addReview(newReview1);
        this.repository.addReview(newReview2);
        this.repository.addReview(newReview3);

        let newReviewsAmount = this.repository.getReviews().length;

        expect(newReviewsAmount).to.be.equal(currentReviewsAmount + 3);
    });

});