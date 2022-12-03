import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { GoogleLoginService } from '../services/googleLogin/google-login.service';
import { LoginService } from '../services/login/login.service';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private router:Router,private login:LoginService,private google:GoogleLoginService) { }

  items: MenuItem[]=[];

  loged=true;

  ngOnInit(): void {
    this.google.getUser()
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: 'home'
      },
      {
        label: 'Novedades',
        icon: 'pi pi-clock',
        routerLink: 'news'
      },
      {
        label: 'Hombre',
        icon: '',
        routerLink: 'male'
      },
      {
        label: 'Mujer',
        icon: '',
        routerLink: 'female'
      },
      {
        label: 'Niños',
        icon: '',
        routerLink: 'kids'
      },
      {
        label: 'Admin',
        icon: '',
        routerLink: 'admin'
      }
    ]
  }

  goToLogin(){
    this.router.navigateByUrl("login")
    this.loged=this.login.isLoged()
  }

  logOut(){
    this.login.logOut()
    this.router.navigateByUrl('/')
    this.ngOnInit()
    this.loged=this.login.logOut()
  }

  googleLogin(){
    this.google.loginWithGoogle()
    this.ngOnInit()
  }

  googleLogOut(){
    this.google.logOut()
    this.router.navigateByUrl('/')
    this.ngOnInit
  }

}
