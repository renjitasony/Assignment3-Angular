import { Component, OnInit,Input } from '@angular/core';
import {BookService} from '../book.service';
import {Router} from '@angular/router';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() public book; 
  constructor(private bservice:BookService,
              private router:Router,
              private books:ListComponent,
    ) { }

  ngOnInit() {
  }
  public delete(bid){
    this.bservice.deleteBook(bid).subscribe(()=>{
    this.books.getBooks();
    });        
    
  }
}
