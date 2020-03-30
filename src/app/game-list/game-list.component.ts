import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ListItem } from '../models/list-game.interface';
import { GameListService } from '../services/game-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  

  gameList:ListItem[];

  constructor(private listaService: GameListService,private router: Router) { 
    this.gameList=this.listaService.getlista();
  }
  apriS(id:number){
    this.router.navigateByUrl('/game-detail?id= ');
  }

  ngOnInit(): void {

  }

  

  

}
