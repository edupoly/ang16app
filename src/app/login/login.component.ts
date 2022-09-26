import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public fb:FormBuilder,public as:AuthService,public router:Router) { }
  loginForm:FormGroup=this.fb.group({
    username:[],
    password:[]
  })
  ngOnInit(): void {
  }
  login(){
    this.as.authenticate(this.loginForm.value)
  }
}
