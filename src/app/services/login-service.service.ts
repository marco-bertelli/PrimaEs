import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-game.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private gameList:ListItem[]=[
    {Id:1,Nome:"COD",Genere:"sparatutto",Descrizione:"si",Rating:9,Prezzo:0,Annouscita:new Date()},
    {Id:2,Nome:"DOOM",Genere:"fps-arena",Descrizione:"nuovo gioco violento",Rating:9,Prezzo:70,Annouscita:new Date()}
  ]
}
