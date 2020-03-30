import { Injectable } from '@angular/core';
import { generiList } from '../models/genere.interface';

@Injectable({
  providedIn: 'root'
})
export class GenereListService {

  private gameList:generiList[]=[
    {id:1,descrizione:"sparatutto"},
    {id:2,descrizione:"rpg"}
  ]
  getlista():generiList[]{
    return this.gameList;
  }
  getSingolo(id:number){
    return this.gameList.find(item=>{
      return item.id === id;
    })
  }
  constructor() { }
}
