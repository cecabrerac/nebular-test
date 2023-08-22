import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/general/authentication/components/home/home.component';
import { LoginComponent } from './pages/general/authentication/components/login/login.component';
import { RegisterComponent } from './pages/general/authentication/components/register/register.component';
import { AuthGuardGuard } from './pages/general/authentication/guards/Authguard/auth-guard.guard';
import { LoginGuard } from './pages/general/authentication/guards/Login/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  {
    path: 'general',
    loadChildren: () =>
      import('./pages/general/general.module').then((m) => m.GeneralModule),
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
