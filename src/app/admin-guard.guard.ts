import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginService } from './services/login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.cookie.check('sesionIniciada')||this.cookie.check('idToken')){
      return true
    }else{
      this.router.navigateByUrl('login')
      return false
    }
  }

  constructor(private loginService:LoginService,private router:Router, private cookie:CookieService){}
  
}
