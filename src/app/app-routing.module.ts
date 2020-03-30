import * as core from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyRouteGuardService } from './services/guard/my-route-guard.service';



const appRoutes: Routes = [ //cambia questa
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [MyRouteGuardService] },
    { path: 'game-list', component: GameListComponent, canActivate: [MyRouteGuardService]},
    { path: 'game-detail/:id', component: GameDetailComponent, canActivate: [MyRouteGuardService]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
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