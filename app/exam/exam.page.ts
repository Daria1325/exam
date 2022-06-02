import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {

  public user = '';

  receiveFromChild(event){
    this.user = event;
  }

  constructor(private Service:ServiceService) { }

  rez(){
    
  }

  ngOnInit() {
  }

}
