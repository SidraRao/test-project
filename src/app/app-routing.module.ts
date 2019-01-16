import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationRequest } from './modules/redconcero/component/registration-request.component';

const routes: Routes = [
  { path: '', redirectTo: 'registration-request' , pathMatch: 'full'},
  { path: 'registration-request', component: RegistrationRequest }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
