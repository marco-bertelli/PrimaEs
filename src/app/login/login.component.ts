import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private listaUtenti: LoginServiceService,private router: Router) {
   }

  ngOnInit(): void {
  }

  login(username:string, password:string){
    

    if(this.listaUtenti.accesso(username,password)){
      this.router.navigateByUrl("/home");
    }
    else console.log("non funzionante")
  }

  loginS(username:string, password:string){
    //nei pulsanti/altro metodo
    sessionStorage.setItem('user', username);
    sessionStorage.setItem('password', password);

    username=sessionStorage.getItem('user');
    password=sessionStorage.getItem('password');

    if(this.listaUtenti.accesso(username,password)){
      this.router.navigateByUrl("/home");
    }
  }

}
