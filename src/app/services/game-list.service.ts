import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private gameList:ListItem[]=[
    {Id:1,Nome:"COD",Genere:1,Descrizione:"si",Rating:9,Prezzo:0,Annouscita:new Date()},
    {Id:2,Nome:"DOOM",Genere:2,Descrizione:"nuovo gioco violento",Rating:9,Prezzo:70,Annouscita:new Date()}
  ]
  getlista():ListItem[]{
    return this.gameList;
  }
  getSingolo(id:number){
    return this.gameList.find(item=>{
      return item.Id === id;
    })
  }
  
  getGenere(genere:number){
    return this.gameList.filter(item=>{
      return item.Genere === genere ;
    })
  }

  constructor() { }
}
