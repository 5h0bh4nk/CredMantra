import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { JoinTeamComponent } from './pages/join-team/join-team.component';
import { MicroLoanComponent } from './modules/micro-loan/micro-loan.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PayLaterComponent } from './modules/pay-later/pay-later.component';
import { PersonalLoanComponent } from './modules/personal-loan/personal-loan.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreditCardComponent } from './modules/credit-card/credit-card.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomePageComponent 
  },
  { 
    path: 'team', 
    component: TeamPageComponent 
  },
  { 
    path: 'blog', 
    component: BlogComponent 
  },
  { 
    path: 'contactUs', 
    component: ContactPageComponent 
  },
  { 
    path: 'signup',
     component: SignUpComponent 
  },
  { 
    path: 'affiliate', 
    component: JoinTeamComponent
  },
  { 
    path: 'short-term-loan', 
    component: MicroLoanComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: 'pay-later', 
    component: PayLaterComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: 'personal-loan', 
    component: PersonalLoanComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: 'credit-card', 
    component: CreditCardComponent,
    canActivate: [AuthGuardService]
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
