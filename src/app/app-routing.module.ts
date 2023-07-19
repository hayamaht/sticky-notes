import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SignInPage } from './pages/sign-in/sign-in.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'sign-in', component: SignInPage },
  //{},
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
