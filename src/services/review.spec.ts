import { expect } from 'chai';
import "reflect-metadata";
import 'mocha';
import { ReviewService } from '.';
import { Review } from '../models';
import MyIocContainer from '../iocconfig';
import { TYPES } from '../types';
import { ReviewRepository } from 'repositories';

describe('Review service', () => {

    let service: ReviewService;
    let container = MyIocContainer.configure();

    class MockRepository implements ReviewRepository {
        private reviews: Review[];

        public constructor() {
            this.reviews.push(new Review({ Artist: "Artist1", Album: "Album1"}));
            this.reviews.push(new Review({ Artist: "Artist2", Album: "Album2"}));
        }

        public getReviews(): Review[] {
            return this.reviews;
        }

        public addReview(review: Review) {
            this.reviews.push(review);
        }
    
        public deleteReview(review: Review) {
            this.reviews.splice(this.reviews.findIndex((r) => r.Album == review.Album && r.Artist == review.Artist), 1);
        }
    }

    beforeEach(() => {
        this.service = container.get(TYPES.ReviewService);
        container.snapshot();
        container.bind(TYPES.ReviewRepository).to(MockRepository);
    });

    afterEach(() => {
        container.restore();
    });

    it('should be possible to add reviews', () => {
        let currentReviewsAmount = this.service.getReviews().length;

        let newReview1: Review = new Review({Album: "Album4", Artist: "Artist4"});
        let newReview2: Review = new Review({Album: "Album5", Artist: "Artist5"});
        let newReview3: Review = new Review({Album: "Album6", Artist: "Artist6"});

        this.service.addReview(newReview1);
        this.service.addReview(newReview2);
        this.service.addReview(newReview3);

        let newReviewsAmount = this.service.getReviews().length;

        expect(newReviewsAmount).to.be.equal(currentReviewsAmount + 3);
    });

    it('should be possible to delete reviews', () => {
        let firstReview = this.service.getReviews()[0];
        let secondReview = this.service.getReviews()[1];
        let currentReviewsAmount = this.service.getReviews().length;

        this.service.deleteReview(firstReview);
        this.service.deleteReview(secondReview);

        let newReviewsAmount = this.service.getReviews().length;

        expect(newReviewsAmount).to.be.equal(currentReviewsAmount - 2);
    });

});