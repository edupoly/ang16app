import { Component } from '@angular/core';
import {mystudents} from './students'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rb16app';
  students = ['praveen','rahul','gopi','krish'];
  salary = 2199393;
  mydob='04-19-1983';
  key='name';
  mystds = mystudents;
  updateKey(k:string){
    console.log(k)
    this.key=k;
  }
}
