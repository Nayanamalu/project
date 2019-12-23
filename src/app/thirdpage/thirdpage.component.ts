import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.scss']
})
export class ThirdpageComponent implements OnInit {

  constructor(private route:Router ) { }

  ngOnInit() {
  }
  login() {
       this.route .navigate(['homepage']);
     } 


    
}
