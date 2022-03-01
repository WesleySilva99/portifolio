import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  /*
  { path: 'home', loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule) },
  */
  { path: 'home', loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule) },
  {path: "", pathMatch:"full", redirectTo:"/home"}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
