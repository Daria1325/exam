import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  add(vec1:number[], vec2:number[]){
      let rezvec=[]
      for (let i =0;i<vec1.length;i++){
        rezvec.push(vec1[i]+vec2[i]);
      }
      return rezvec;
  }

  divide(vec1:number[], vec2:number[]){
    let rezvec=[]
    for (let i =0;i<vec1.length;i++){
      rezvec.push(vec1[i]/vec2[i]);
    }
    return rezvec;
  }

  multiply(vec1:number[], vec2:number[]){
    let rezvec=[]
    for (let i =0;i<vec1.length;i++){
      rezvec.push(vec1[i]*vec2[i]);
    }
    return rezvec;
  }

  minus(vec1:number[], vec2:number[]){
    let rezvec=[]
    for (let i =0;i<vec1.length;i++){
      rezvec.push(vec1[i]-vec2[i]);
    }
    return rezvec;
  }
}
