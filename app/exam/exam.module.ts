import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ExamPageRoutingModule } from './exam-routing.module';

import { ExamPage } from './exam.page';

import { HeaderComponent } from '../header/header.component';
import { FormComponent } from '../form/form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from '../myform/myform.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExamPage, HeaderComponent, FormComponent, MyformComponent]
})
export class ExamPageModule {}
