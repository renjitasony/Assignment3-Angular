import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-authrow',
  templateUrl: './authrow.component.html',
  styleUrls: ['./authrow.component.css']
})
export class AuthrowComponent implements OnInit {
  @Input() public author; 
  constructor() {    
  }

  ngOnInit() {
  }

}
