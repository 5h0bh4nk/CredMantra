import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditCardComponent } from './modules/credit-card/credit-card.component';
import { MicroLoanComponent } from './modules/micro-loan/micro-loan.component';
import { PayLaterComponent } from './modules/pay-later/pay-later.component';
import { PersonalLoanComponent } from './modules/personal-loan/personal-loan.component';
import {MatStepperModule} from '@angular/material/stepper';
import { CompaniesPageComponent } from './pages/companies-page/companies-page.component';
import { ApplicationFormComponent } from './pages/application-form/application-form.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { JoinTeamComponent } from './pages/join-team/join-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    NavbarComponent,
    CreditCardComponent,
    MicroLoanComponent,
    PayLaterComponent,
    PersonalLoanComponent,
    CompaniesPageComponent,
    ApplicationFormComponent,
    ContactPageComponent,
    JoinTeamComponent
  ],
  imports: [
    MatStepperModule,
    MatDividerModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
