import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {LibraryService} from '../library.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  constructor(private libservice:LibraryService,
              private router:Router
    ) {
      this.user = new User();
     }

  ngOnInit() {
  }
  public onSubmit(){
    this.libservice.authenticate(this.user).subscribe(data=>{
       var isSuccess;
       isSuccess = data;
      if(isSuccess.status){
        this.router.navigateByUrl("/home");
      }else{
        this.router.navigateByUrl("/");
      }
    })
  }
}
