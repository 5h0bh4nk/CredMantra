import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { JoinTeamComponent } from './pages/join-team/join-team.component';
import { MicroLoanComponent } from './modules/micro-loan/micro-loan.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'affiliate', component: JoinTeamComponent},
  { path: 'short-term-loan', component: MicroLoanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
