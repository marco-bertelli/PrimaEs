import { Injectable } from '@angular/core';
import { ListItem } from '../models/list-game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private gameList:ListItem[]=[
    {Id:1,Nome:"COD",Genere:"sparatutto",Descrizione:"si",Rating:9,Prezzo:0,Annouscita:new Date()}
  ]
  getlista():ListItem[]{
    return this.gameList;
  }
  getSingolo(id:number){
    return this.gameList.find(item=>{
      return item.Id === id;
    })
  }
  constructor() { }
}
