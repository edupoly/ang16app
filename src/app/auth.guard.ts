import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { delay, map, Observable, of, throttle, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      var o:Observable<boolean> = new Observable((subscriber)=>{
        setTimeout(()=>{
          subscriber.next(true)
        },1000)
      })
      
      return o

      // var p:Promise<boolean> = new Promise((resolve,reject)=>{
      //   setTimeout(()=>{
      //     resolve(true)
      //   },1000)
      // })
      // console.log('lets auth gaurd');
      // console.log(p)
      // return p;
      
  }
  
}
