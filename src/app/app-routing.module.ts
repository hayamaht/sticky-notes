import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'sign-in', component: SignInPage },
  { path: 'register', component: RegisterPage },
  //{},
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
