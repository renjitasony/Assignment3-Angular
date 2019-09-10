import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
 book = new Book();
 editBook;
 editmode = false;
 addOrUpdate = "Add";
 imageFile;
  constructor(private bkservice:BookService,
              private route:ActivatedRoute,
              private router:Router
    ) { 
      route.params.subscribe(params=>{
        var id = params.id;
        
        if(id != "new"){
          this.editmode = true;
          this.addOrUpdate ="Update"
          bkservice.getBook(id).subscribe(data=>{
            this.editBook = data;
            this.book.setData(this.editBook);
          });
        }
      })
    }

  ngOnInit() {            
  }
  public onFileChange(event){
    if(event.target.files.length >0){
       this.imageFile = event.target.files[0];      
    }
  }
  public onSubmit(){   
    var formData:FormData = new FormData();
    formData.append('bimage',this.imageFile);
    if(this.editmode){
      this.bkservice.updateBook(this.book).subscribe(()=>{
        this.bkservice.uploadImage(formData,this.book.bid).subscribe(()=>{
          this.router.navigateByUrl("/home/list/bk");
        });
      });
    }else{
      this.bkservice.addBook(this.book).subscribe(()=>{
        this.bkservice.uploadImage(formData,this.book.bid).subscribe(()=>{
          this.router.navigateByUrl("/home/list/bk");
        });
      });
    }
       
    
    
    
  }
  
}
