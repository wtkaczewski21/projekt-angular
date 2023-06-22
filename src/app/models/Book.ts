export interface Book {
    id: number;
    title: string;
    author: string;
    imgUrl: string;
    isFavorite: boolean;
    availableCopies: number;
}