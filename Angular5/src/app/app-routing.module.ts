import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SharedComponent } from './shared/shared.component';
import { ErrorInfoComponent } from './error-info/error-info.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path:'shared',
    component: SharedComponent
  },
  {
    path:"errorInfo",
    component: ErrorInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
