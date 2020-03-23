import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ListItem } from '../models/list-game.interface';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @Output()
  selectListItem:EventEmitter<number>=new EventEmitter<number>();

  gameList:ListItem[];

  constructor(private listaService: GameListService ) { 
    this.gameList=this.listaService.getlista();
  }
  apriS(id:number){
    this.selectListItem.emit(id);
    console.log(id);
  }

  ngOnInit(): void {

  }

  

  

}
