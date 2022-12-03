import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CookieService } from 'ngx-cookie-service';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  constructor(private auth:AngularFireAuth,private cookie:CookieService,private router:Router) { }

  async loginWithGoogle(){
    let referenceProvider=new firebase.auth.GoogleAuthProvider();
    await this.auth.signInWithPopup(referenceProvider);
    this.auth.authState.subscribe(
      async user=>{
        await user?.getIdToken()
        .then(
          token=>{
            this.cookie.set('idToken',token)
            this.router.navigateByUrl('admin')
          }
        )
        .catch(
          error=>{
            console.error('Ocurrió un Error: ',error)
          }
        )
      }
    )
  }

  getUser(){
    this.auth.authState.subscribe(
      async user=>{
        let token=await user?.getIdToken()
        console.log(token)
      }
    )
  }

  logOut(){
    this.auth.signOut().then(
      ()=>{
        alert('Cerro Sesion')
        this.cookie.delete('idToken');
      }
    )
  }

}
