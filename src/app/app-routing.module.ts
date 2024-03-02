import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  // {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"" , component:HomeComponent , title:"home"},
  {path:"about" , component:AboutComponent , title:"about"},
  {path:"contact" , component:ContactComponent , title:"contact"},
  {path:"portfolio" , component:PortfolioComponent , title:"portfolio"},
  {path:"**" , component:NotFoundComponent , title:"404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
