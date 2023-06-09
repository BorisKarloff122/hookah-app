import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", pathMatch:'full', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path:"main", pathMatch:'full', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
