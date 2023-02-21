import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';



const routes:Routes=[
  {
    path:'app-template-driven-form/:id',
    component:TemplateDrivenFormComponent
  },
  {
    path:'',
    component:HomePageComponent,
    pathMatch:'full'
  },
  {
    path:'app-reactive-form',
    component:ReactiveFormComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
