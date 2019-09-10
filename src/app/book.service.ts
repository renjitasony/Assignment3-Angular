import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  constructor(private httpclient:HttpClient) { }
  
  public getBook(bid){
    let url = 'http://localhost:8090/book/getbook/'+bid;
    return this.httpclient.get(url);
  }
  public addBook(book){
    let url = 'http://localhost:8090/book/add';
    return this.httpclient.post<any>(url,book);
  }
  public uploadImage(image,bid){          
    let url = 'http://localhost:8090/book/upload/'+bid;
    return this.httpclient.post<any>(url,image);
  }
  public deleteBook(bid){
    let url = 'http://localhost:8090/book/delete/'+bid;
    return this.httpclient.get(url);
  }
  public updateBook(book){
    let url = 'http://localhost:8090/book/update/'+book.bid;
    return this.httpclient.post<any>(url,book);
  }
}
