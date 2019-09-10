import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  constructor(private httpclient:HttpClient) { }
  
  public getBook(bid){
    let url = 'https://maverick9020.herokuapp.com/book/getbook/'+bid;
    return this.httpclient.get(url);
  }
  public addBook(book){
    let url = 'https://maverick9020.herokuapp.com/book/add';
    return this.httpclient.post<any>(url,book);
  }
  public uploadImage(image,bid){          
    let url = 'https://maverick9020.herokuapp.com/book/upload/'+bid;
    return this.httpclient.post<any>(url,image);
  }
  public deleteBook(bid){
    let url = 'https://maverick9020.herokuapp.com/book/delete/'+bid;
    return this.httpclient.get(url);
  }
  public updateBook(book){
    let url = 'https://maverick9020.herokuapp.com/book/update/'+book.bid;
    return this.httpclient.post<any>(url,book);
  }
}
