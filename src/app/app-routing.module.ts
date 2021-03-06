import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { OtpComponent } from './otp/otp.component';


const routes: Routes = [
  {path:'' , component:OtpComponent} ,
  {path:'bank' ,component:BankComponent},
  {path:'home' ,component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
