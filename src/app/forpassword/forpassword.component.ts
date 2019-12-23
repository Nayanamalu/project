import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forpassword',
  templateUrl: './forpassword.component.html',
  styleUrls: ['./forpassword.component.scss']
})
export class ForpasswordComponent implements OnInit {

  constructor(private route:Router ) { }

  ngOnInit() {
  }
  forgot() {
       this.route .navigate(['forgot']);
     } 
   
}
