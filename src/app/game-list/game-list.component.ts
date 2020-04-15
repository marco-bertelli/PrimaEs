import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { ListItem } from '../models/list-game.interface';
import { GameListService } from '../services/game-list.service';
import { Router } from '@angular/router';
import { GenereListService } from '../services/genere-list.service';
import { generiList } from '../models/genere.interface';
import { MyHttpServiceService } from '../my-http-service.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  

  gameList:ListItem[];
  genereList:generiList[];

  constructor(private listaService: GameListService,private router: Router,private listaGameService:GenereListService,private myHttpService: MyHttpServiceService) { 
    
    this.genereList=this.listaGameService.getlista();
  }
  apriS(id:number){
    this.router.navigate(['/game-detail',id]);
  }

  filtra(valore:number){
    if(Number(valore)===0){
      this.retrieveGames();
    }
    else
    this.retrieveFilter(Number(valore));
    
  }

  retrieveGames(){
    this.myHttpService.getGames().subscribe(reponse => {
      this.gameList = reponse;
    }, err => {
      console.log('error');
    });
  }

  retrieveFilter(genere){
    this.myHttpService.getFiltra(genere).subscribe(reponse => {
      this.gameList = reponse.body;
    }, err => {
      console.log('error');
    });
  }

  ngOnInit(): void {
    this.retrieveGames();
    
  }

  

  

}
