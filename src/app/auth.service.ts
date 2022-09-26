import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient, public aR:ActivatedRoute, public router:Router) { }
  authenticate(user:any){
    this.http.post("http://localhost:4000/login",user).subscribe((res:any)=>{
      window.localStorage.setItem('token',res['token'])
      this.router.navigate(['/home'])
    })
  }
  isLoggedIn(){
    if(window.localStorage.getItem('token')){
      return true
    }
    else{
      return false
    }
  }
  logout(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
