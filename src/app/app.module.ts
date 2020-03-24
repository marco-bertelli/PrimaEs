import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { RoutingGame } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    GameListComponent,
    GameDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RoutingGame
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
