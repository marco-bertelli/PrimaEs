import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/list-game.interface';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  gameList:ListItem[];

  constructor(private listaService: GameListService ) { 
    this.gameList=this.listaService.getlista();
  }

  ngOnInit(): void {

  }

  

  

}
