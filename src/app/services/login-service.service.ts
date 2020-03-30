import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private controllo:boolean;

  private gameList:User[]=[
    {username:"marco",password:"prosciutto"},
    {username:"carlo",password:"negro"},
  ]
  

  accesso(username:string,password:string):boolean{

    this.controllo=false;
    
    this.gameList.forEach(element => {
      if(element.username===username && element.password===password){
        this.controllo=true;
      }
    });
    
    return this.controllo;  
  }
 
}
