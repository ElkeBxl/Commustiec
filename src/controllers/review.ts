import * as express from "express";
import { Request, Response } from "express";
import { ReviewService } from "../services/review";

export class ReviewController {

    private reviewService: ReviewService;

    public constructor() {
        this.reviewService = new ReviewService();
    }

    public get = (req: Request, res: Response) => {
        res.status(200).send(this.reviewService.getReviews());
    };

    public post = (req: Request, res: Response) => {
        const data = req.body;
        res.status(200).send(data);
    };

}