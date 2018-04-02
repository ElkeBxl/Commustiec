export class Review {

    public Artist: string;

    public Album: string;

    public DiscoverdHow: string;

    public FirstListenTime: string;

    public FirstListenDuration: string;

    public FirstListenInterrupted: boolean;

    public FirstListenFeeling: string;

    public ListenedBefore: boolean;

    public ListenAgain: boolean;

    public ListenAgainWhen: string;

    public DescribeThreeWords: string;

    public SoundsLike: string;

    public SeeThemLive: boolean;

    public Rating: number;

    public BestSong: string;

    public ContinuedListeningWhen: string;

    public NewRating: number;

    public SecondListenFeeling: string;

    public constructor(init?:Partial<Review>) {
        Object.assign(this, init);
    }

}