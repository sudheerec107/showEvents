export interface Event {
    id: string;
    heading: string;
    subheading: string;
    date: Date;
    description: string;
    category: Array<string>;
    createdBy: string;//userId
    likes?: number,
    shares?: number,
    img?: string
}