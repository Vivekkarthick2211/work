import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrimony',
  templateUrl: './matrimony.page.html',
  styleUrls: ['./matrimony.page.scss'],
})
export class MatrimonyPage implements OnInit {
  b:boolean=false
  a:boolean=false;
  constructor() { }

  ngOnInit() {

  }
   fi(){
     this.b=!this.b
   }
   ki(){
    this.a=!this.a
   }
   public form = [
    { val: 'Handicapped', isChecked: true }
  ];
}
