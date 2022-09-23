import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coutnries',
  templateUrl: './coutnries.component.html',
  styleUrls: ['./coutnries.component.css']
})
export class CoutnriesComponent implements OnInit {

  constructor(public http:HttpClient) { }
  countries:any;
  ngOnInit(): void {
    this.http.get("https://restcountries.com/v2/all").subscribe((res)=>{
      this.countries=res;
    })
  }

}
