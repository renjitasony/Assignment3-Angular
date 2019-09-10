import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpclient:HttpClient) { }
  public registerUser(user){
    let url ='http://localhost:8090/user/register';
    return this.httpclient.post(url,user);
  }
  public authenticate(user){
    let url ='https://maverick9020.herokuapp.com/user/login';
    return this.httpclient.post(url,user);
  }
  public getAuthors(){
    let url = 'https://maverick9020.herokuapp.com/authors';
    return this.httpclient.get(url);
  }
  public getBooks(){
    let url = 'https://maverick9020.herokuapp.com/books';
    return this.httpclient.get(url);
  }
}
