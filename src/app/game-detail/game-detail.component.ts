import { Component, OnInit, Input, } from '@angular/core';
import { ListItem } from '../models/list-game.interface';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  
  @Input()
  gameID:number;

  
  

  game:ListItem;

  constructor(private gameListService: GameListService) {

   }
  

  ngOnInit(): void {
    this.game=this.gameListService.getSingolo(this.gameID);
    console.log("gameID"+this.gameID);
  }
  
}
