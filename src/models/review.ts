export class Review {

    public Artist: string;

    public Album: string;

    public Rating: number;

    public constructor(init?:Partial<Review>) {
        Object.assign(this, init);
    }

}