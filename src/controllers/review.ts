import * as express from "express";
import { Request, Response } from "express";
import { TYPES } from "../types";
import { ReviewService } from "../services";
import { inject, injectable } from "inversify";

@injectable()
export class ReviewController {

    public constructor(@inject(TYPES.ReviewService) private reviewService: ReviewService) { }

    public get = (req: Request, res: Response) => {
        res.status(200).send(this.reviewService.getReviews());
    };

    public post = (req: Request, res: Response) => {
        const data = req.body;
        res.status(200).send(data);
    };

}