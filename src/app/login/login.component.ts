import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../data/interfaces/iuser.metadata';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersCollection:User[]=[];

  userData=new FormGroup(
    {
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
  )

  constructor(private usersService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      users=>this.usersCollection=users
    )
  }

  logIn(){
    this.usersService.login(this.userData,this.usersCollection);
    this.router.navigateByUrl("admin").then(
      reDirectTo=>window.location.reload()
    )
  }

}
