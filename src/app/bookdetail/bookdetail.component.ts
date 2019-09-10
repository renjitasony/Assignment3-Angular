import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service'

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  book;
  constructor(private bservice:BookService,
              private route:ActivatedRoute) {    
   }

  ngOnInit() {
    this.route.params.subscribe(params=>{          
      if(params.id){
        this.bservice.getBook(params.id).subscribe(data=>{
          this.book = data;
        });
      }          
    })
  }

}
