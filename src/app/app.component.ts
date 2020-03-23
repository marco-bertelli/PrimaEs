import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proviamo';
  lanciato=0;
  valore="";


  lista = ['home', 'lista'];

  elimina(indice:number) {
    this.title="";
    this.lanciato=1;
  }
  visto(){
    if(this.lanciato==1)return true;
    else return false;
  }
}

