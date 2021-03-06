import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component'; 

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    data: { title: 'Rick & Morty' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
