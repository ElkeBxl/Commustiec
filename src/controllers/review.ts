import * as express from "express";
import { Request, Response } from "express";
import { ReviewService } from "../services/review";

export class ReviewController {

    private reviewService: ReviewService;

    public constructor(router: express.Router) {

        this.reviewService = new ReviewService();

        router.get('/', (req: Request, res: Response) => {
            res.status(200).send(this.reviewService.getReviews());
        });
    
        router.post('/', (req: Request, res: Response) => {
            const data = req.body;
            // query a database and save data
            res.status(200).send(data);
        });
    }

}