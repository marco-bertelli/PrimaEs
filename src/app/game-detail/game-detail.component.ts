import { Component, OnInit, Input, } from '@angular/core';
import { ListItem } from '../models/list-game.interface';
import { GameListService } from '../services/game-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {


  game:ListItem;

  constructor(private gameListService: GameListService,private activateRoute: ActivatedRoute) {

   }
  

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params=>{
      this.game=this.gameListService.getSingolo(Number(params.get("id")));
    })
    
    
  }
  
}
