import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list;
  type:string;
  constructor(private libservice:LibraryService,
              private route:ActivatedRoute) { 
                this.route.params.subscribe((params)=>{
                  this.type = params.type;
                  if(this.type == "bk"){
                    this.getBooks();
                  }else if(this.type == "auth"){
                    this.getAuthors();
                  }
                })
              }

  ngOnInit() {    
  }
  public getBooks(){
    this.libservice.getBooks().subscribe(data=>{
      this.list = data;
    }); 
  }
  public getAuthors(){
    this.libservice.getAuthors().subscribe(data=>{
      this.list = data;
    })
  }
}
