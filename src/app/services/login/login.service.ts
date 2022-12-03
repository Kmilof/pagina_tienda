import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { map } from 'rxjs';
import { User } from 'src/app/data/interfaces/iuser.metadata';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loged=false;

  private usersCollection:AngularFirestoreCollection<User>

  constructor(private db:AngularFirestore,private cookieService:CookieService){
    this.usersCollection=this.db.collection('users');
  }

  getUsers(){
    return this.usersCollection.snapshotChanges().pipe(
      map(action=>action.map(a=>a.payload.doc.data()))
    )
  }

  login(form:FormGroup,usersCollection:User[]){
    let text='No Inicio'
    if(form.valid){
      usersCollection.forEach(
        user=>{
          if(form.value.username==user.username){
            if(form.value.password==user.password){
              this.loged=true
              this.cookieService.set('sesionIniciada',this.loged.toString())
              text='Inició Sesión'
            }
          }
        }
      )
      alert(text)
    }
  }

  isLoged(){
    if(this.cookieService.get('sesionIniciada')==='true'){
      this.loged=true
    }
    return this.loged
  }

  logOut(){
    this.loged=false
    //this.cookieService.delete('sesionIniciada')
    this.cookieService.delete('sesionIniciada','/','localhost',false,'Lax')
    return this.loged
  }


}
