import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
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
import { CareerComponent } from './pages/career/career.component';
import { EMIComponent } from './emi/emi.component';
import { CreditLineComponent } from './modules/credit-line/credit-line.component';
import { OverDraftComponent } from './modules/over-draft/over-draft.component';
import { BalanceTransferComponent } from './modules/balance-transfer/balance-transfer.component';
import { CustomerSecurityComponent } from './pages/customer-security/customer-security.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { InstantLoanComponent } from './modules/instant-loan/instant-loan.component';

const routes: Routes = [
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
  // { 
  //   path: 'signup',
  //    component: SignUpComponent 
  // },
  { 
    path: 'affiliate', 
    component: JoinTeamComponent
  },
  { 
    path: 'short-term-loan', 
    component: MicroLoanComponent,
    // canActivate: [AuthGuardService]
  },
  { 
    path: 'pay-later', 
    component: PayLaterComponent,
    // canActivate: [AuthGuardService]
  },
  { 
    path: 'personal-loan', 
    component: PersonalLoanComponent,
  },
  { 
    path: 'credit-card', 
    component: CreditCardComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'balance-transfer',
    component: BalanceTransferComponent
  },
  { 
    path: 'services', 
    component: DashboardComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'career',
    component: CareerComponent
  },
  {
    path: 'emi',
    component: EMIComponent
  },
  {
    path: 'credit-line',
    component: CreditLineComponent
  },
  {
    path: 'over-draft',
    component: OverDraftComponent
  },
  {
    path: 'instant-loan',
    component: InstantLoanComponent
  },
  {
    path: 'customer-security',
    component: CustomerSecurityComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsComponent
  },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
