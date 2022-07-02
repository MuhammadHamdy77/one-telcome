import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './providers/gaurda/auth.guard';
const routes: Routes = [
  {path:"" ,redirectTo: 'login' , pathMatch:"full"},
  {path:"login" , component: LoginComponent},
  {
    path: 'panel' ,
    loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule)
  },
  {path:"**" , component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
