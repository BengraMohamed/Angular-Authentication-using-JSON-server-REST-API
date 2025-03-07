import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {component:HomeComponent , path:'' , canActivate:[AuthGuard]},
  {component:HomeComponent , path:'home' },
  {component:RegisterComponent , path:'register'  },
  {component:LoginComponent , path:'login'},
  {component:UserlistingComponent , path:'user' , canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
