import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';




const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'game-list', component: GameListComponent},
    { path: 'game-detail', component: GameDetailComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
   // { path: '**', component: PageNotFoundComponent }
];

@core.NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingGame { }