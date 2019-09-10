import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {LibraryService} from '../library.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  cpwd:string;
  constructor(private libservice:LibraryService,
              private router:Router
    ) { }

  ngOnInit() {
  }
  public onSubmit(){
    this.libservice.registerUser(this.user).subscribe();
    this.router.navigateByUrl('/');
  }
}
