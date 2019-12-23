import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {

  constructor(private route:Router ) { }

  ngOnInit() {
  }
  login() {
       this.route .navigate(['thirdpage']);
     } 
    register(){
      this.route.navigate(['secondpage']);
    }
    link(){
      this.route.navigate(['intro']);
    }
}
