import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { FemaleComponent } from './female/female.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MaleComponent } from './male/male.component';
import { NewsComponent } from './news/news.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'male',
    component: MaleComponent
  },
  {
    path: 'female',
    component: FemaleComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AdminGuardGuard]
  },
  {
    path: '**',
    component: HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
