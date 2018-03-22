import * as express from "express";
import { Request, Response } from "express";
import { TYPES } from "../types";
import { ReviewService } from "../services";
import { inject, injectable } from "inversify";

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
        res.status(200).render('pages/create', { description: "Form submitted" });
    };

}