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

  menulist:MenuItem[] =[
    {id:1,description:"home",selected:true },
    {id:2,description:"lista",selected:false },
    

  ]
  selectComponet(id:number){
    
  }

}
