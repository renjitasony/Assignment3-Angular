export class Book {
    public bid:string;
    public btitle:string;
    public bauthor:string;
    public bcategory:string;
    public bimage:string;
    constructor(){}
    public setData(book){
        this.bid = book.bkid;
        this.btitle = book.bktitle;
        this.bauthor = book.bkauthor;
        this.bcategory = book.bkcategory;
        this.bimage = book.bkimage;

    }
}
