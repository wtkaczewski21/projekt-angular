export class Book {
    id: number;
    title: string;
    author: string;
    imgUrl: string;

    constructor(id: number, title: string, author: string, imgUrl: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.imgUrl = imgUrl;
    }
}