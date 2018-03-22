import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routerConfig: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: HeroesComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routerConfig)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
