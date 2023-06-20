export class Book {
    id: number;
    title: string;
    author: string;
    imgUrl: string;
    isFavorite: boolean;

    constructor(id: number, title: string, author: string, imgUrl: string, isFavorite: boolean) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.imgUrl = imgUrl;
        this.isFavorite = isFavorite;
    }
}