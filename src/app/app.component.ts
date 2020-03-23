import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  componentCorrente:number =1;

  selezionato:number;

  dettaglio(id:number){
    this.selezionato=id;
    this.componentCorrente=3;
    
    console.log("selezionato ="+this.selezionato);

  }
  
  

  

  

}

