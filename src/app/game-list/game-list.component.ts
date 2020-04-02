import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ListItem } from '../models/list-game.interface';
import { GameListService } from '../services/game-list.service';
import { Router } from '@angular/router';
import { GenereListService } from '../services/genere-list.service';
import { generiList } from '../models/genere.interface';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  

  gameList:ListItem[];
  genereList:generiList[];

  constructor(private listaService: GameListService,private router: Router,private listaGameService:GenereListService) { 
    this.gameList=this.listaService.getlista();
    this.genereList=this.listaGameService.getlista();
  }
  apriS(id:number){
    this.router.navigate(['/game-detail',id]);
  }

  filtra(valore:number){
    
    this.gameList=this.listaService.getGenere(Number(valore));
    
  }

  ngOnInit(): void {

  }

  

  

}
