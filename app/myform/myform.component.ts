import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  size:number;
  vec1=[];
  vec2=[];

  constructor() { }

  checksize(s:string){
    this.size= parseInt(s);
    for (let i=0;i<this.size;i++){
      this.vec1.push(0);
      this.vec2.push(0);
    }
    console.log(this.vec1);
  }
  ngOnInit() {}

}
