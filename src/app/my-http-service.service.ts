import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListItem } from './models/list-game.interface';


@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/giochi');
  }
  
  //funzione che filtra
  getFiltra(genere: number): Observable<HttpResponse<ListItem[]>> {
    //stringa di comodo
    let author: string =genere+"";

    let params: HttpParams;
    
    if (author != null) {
      params = new HttpParams().set('Genere', author);
    }
    
    return this.httpClient.get<ListItem[]>('http://localhost:3000/giochi', { observe: 'response',  params: params });
  }

}

