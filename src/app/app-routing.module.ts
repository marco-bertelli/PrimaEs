import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: 'home', component: PrimoComponent, data: { title: "Primo" } },
    { path: 'primo-diverso', component: PrimoComponent, data: { title: "Primo Diverso" } },
    { path: 'secondo', component: SecondoComponent },
    { path: 'ciclo-vita', component: CiclovitaComponent },
    { path: '', redirectTo: '/primo', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DemoBergamoRoutingModule { }