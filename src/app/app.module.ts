import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
import { BlogComponent } from './pages/blog/blog.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
// import { NgxPageScrollModule } from 'ngx-page-scroll';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { CareerComponent } from './pages/career/career.component';
import { ModalComponent } from './basic_components/modal/modal.component';
import { FooterComponent } from './basic_components/footer/footer.component';
import { EMIComponent } from './emi/emi.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    // SignUpComponent,
    NavbarComponent,
    CreditCardComponent,
    MicroLoanComponent,
    PayLaterComponent,
    PersonalLoanComponent,
    CompaniesPageComponent,
    ApplicationFormComponent,
    ContactPageComponent,
    JoinTeamComponent,
    BlogComponent,
    TeamPageComponent,
    DashboardComponent,
    CareerComponent,
    ModalComponent,
    FooterComponent,
    EMIComponent
  ],
  imports: [
    // NgxPageScrollModule,
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
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxSliderModule,
    MatCardModule
  ],
  providers: [DatePipe, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '478692879646-rs69e71fugfgpbh3dior165hhs1vmej2.apps.googleusercontent.com'
          )
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
