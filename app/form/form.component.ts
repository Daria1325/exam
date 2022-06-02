import { Component,OnInit,Input, Output, EventEmitter} from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms'; //одно поле

import { FormGroup, FormBuilder, Validator } from '@angular/forms';

import { IWrite } from './iwrite';
import { WriteScreen } from './writeScreen';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  vec1:[];
  vec2:[];
  size:number;

  logger: IWrite;

  @Output() public outToParent = new EventEmitter();

  myForm = this.fb.group({
    size: [2,[Validators.max(6)]],
    vector1: this.fb.array([]),
    vector2: this.fb.array([])
  
 });

public addVector1(): void{
  for(let i=0;i<this.myForm.value.size;i++){
    (<FormArray>this.myForm.get('vector1')).push(
      this.fb.group({
        value:[1,[Validators.required]]
      })
    )
  }
  
}
public addVector2(): void{
  for(let i=0;i<this.myForm.value.size;i++){
    (<FormArray>this.myForm.get('vector2')).push(
      new FormGroup({
        value:new FormControl('')
      })
    )
  }
  
}

addFields(){
  this.addVector1();
  this.addVector2();
}

 constructor(private fb: FormBuilder){
  
 }


 onSubmit(){
   console.log(this.myForm.value.size);
   console.log(this.myForm.value.vector1);
   console.log(this.myForm.value.vector2);
  //  this.logger = new WriteScreen();
  //  this.outToParent.emit('Data from form ' + this.logger.write(this.user));
 }

  ngOnInit() {
    
  }



}
