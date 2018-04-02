import * as express from "express";
import { Request, Response } from "express";
import { TYPES } from "../types";
import { ReviewService } from "../services";
import { inject, injectable } from "inversify";
import { Review } from "../models";

@injectable()
export class ReviewController {

    public constructor(@inject(TYPES.ReviewService) private reviewService: ReviewService) { }

    public get = (req: Request, res: Response) => {
        res.status(200).render('pages/index', { reviews: this.reviewService.getReviews() });
    };

    public createGet = (req: Request, res: Response) => {
        res.status(200).render('pages/create', { description: "Please fill in the form" });
    };

    public createPost = (req: Request, res: Response) => {
        const data = req.body;
        console.log(data);

        let review = new Review({ 
            Album: data.album, 
            Artist: data.artist, 
            DiscoverdHow: data['discovered-how'],
            FirstListenTime: data['first-listen-time'],
            FirstListenDuration: data['first-listen-duration'],
            FirstListenInterrupted: data['first-listen-interrupted'],
            FirstListenFeeling: data['first-listen-feeling'],
            ListenedBefore: data['listened-before'],
            ListenAgain: data['listen-again'],
            ListenAgainWhen: data['listen-again-when'],
            DescribeThreeWords: data['describe-three-words'],
            SoundsLike: data['sounds-like'],
            SeeThemLive: data['see-them-live'],
            Rating: data['rating'],
            BestSong: data['best-song'],
            ContinuedListeningWhen: data['continued-listening'],
            NewRating: data['new-rating'],
            SecondListenFeeling: data['second-listen-feeling'] 
        });

        console.log(review);

        this.reviewService.addReview(review);

        res.status(200).render('pages/create', { description: "Review created" });
    };

}