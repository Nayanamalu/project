import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.scss']
})
export class SecondpageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
register(){
  this.route .navigate(['thirdpage']);
 } 
}

