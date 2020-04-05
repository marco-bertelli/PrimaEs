import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/list-game.interface';
import { GameListService } from '../services/game-list.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';​

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  gameList:ListItem[];
  gameform:FormGroup;
  attivato:boolean;
  gioco:ListItem;
  
  constructor(private listaService: GameListService,private fb: FormBuilder) { 
    this.gameList=this.listaService.getlista();

    this.gameform = this.fb.group({
      id: '',
      name: '',
      descrizione:'',
      genere:'',
      rating:'',
      prezzo:'',
      annoUscita:'',
    });
  }

  ngOnInit(): void {
    this.attivato=false;
  }

  form(id:number){
    this.gioco=this.listaService.getSingolo(Number(id));
    this.modifica(this.gioco);
    this.attivato=true;
  }
  idpassato(){
    if(this.attivato===true)return true;
    else return false;
  }
  modifica(gioco:ListItem){
    this.gameform = this.fb.group({
      id: gioco.Id,
      name: gioco.Nome,
      descrizione: gioco.Descrizione,
      genere: gioco.Genere,
      rating: gioco.Rating,
      prezzo: gioco.Prezzo,
      annoUscita: gioco.Annouscita,
    });
  }
  onSubmit(form){
    
    
  }

}
