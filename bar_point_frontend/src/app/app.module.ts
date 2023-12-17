import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { BenefitPopupComponent } from './components/benefit-popup/benefit-popup.component';
import { BenefitListComponent } from './components/benefit-list/benefit-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { BenefitSliderComponent } from './components/benefit-slider/benefit-slider.component';
import { BenefitSliderItemComponent } from './components/benefit-slider-item/benefit-slider-item.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { UserComponent } from './components/user/user.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AccordionModule } from 'primeng/accordion';


import { BusinessComponent } from './components/business/business.component';
import { SideNavComponent } from './components/business/side-nav/side-nav.component';
import { CustomersComponent } from './components/business/customers/customers.component';
import { PromotionsComponent } from './components/business/promotions/promotions.component';
import { DashboardComponent } from './components/business/dashboard/dashboard.component';
import { TableModule } from 'primeng/table';
import { DashletComponent } from './components/business/dashlet/dashlet.component';
import { TransactionPopupComponent } from './components/transaction-popup/transaction-popup.component';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { BusinessLoginComponent } from './components/business-login/business-login.component';
import { BusinessRegisterComponent } from './components/business-register/business-register.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';


import { FileUploadModule } from 'primeng/fileupload';
import { BenefitPopupEditComponent } from './components/benefit-popup-edit/benefit-popup-edit.component';
import { BenefitPopupDeleteComponent } from './components/benefit-popup-delete/benefit-popup-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    RegisterComponent,
    BenefitPopupComponent,
    BenefitListComponent,
    FooterComponent,
    ButtonComponent,
    LogoComponent,
    BenefitSliderComponent,
    BenefitSliderItemComponent,
    UserComponent,
    HomeComponent,
    CardListComponent,
    FaqsComponent,
    ProfileUserComponent,
    BusinessComponent,
    FaqsComponent,
    SideNavComponent,
    CustomersComponent,
    PromotionsComponent,
    DashboardComponent,
    DashletComponent,
    TransactionPopupComponent,
    BusinessLoginComponent,
    BusinessRegisterComponent,
    HamburgerMenuComponent,
    BenefitPopupEditComponent,
    BenefitPopupDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenuModule,
    ToastModule,
    MessagesModule,
    HttpClientModule,
    InputTextModule ,
    CalendarModule ,
    RadioButtonModule ,
    FormsModule,
    DropdownModule,
    ReactiveFormsModule,
    CardModule,
    CarouselModule,
    TableModule,
    AccordionModule,
    DialogModule,
    PanelModule,
    AutoCompleteModule,
    FileUploadModule
  ],
  providers: [
    AuthInterceptor
],
  bootstrap: [AppComponent]
})
export class AppModule { }