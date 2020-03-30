import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MenuItem } from '../models/menu-item.interface';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  utente=sessionStorage.getItem('user');

  admin(){

    if(sessionStorage.getItem('privilege')==='admin')return true;
    
    else return false;

  }
  

}
