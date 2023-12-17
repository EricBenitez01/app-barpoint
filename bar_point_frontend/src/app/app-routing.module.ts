import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth-guard';
import { BusinessComponent } from './components/business/business.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component'
import { BusinessRegisterComponent } from './components/business-register/business-register.component';
import { BusinessLoginComponent } from './components/business-login/business-login.component';

const routes: Routes = [
    { path: '', redirectTo: '/login/1', pathMatch: 'full' },
    { path: 'login/:id', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home/:id', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
    { path: 'profile-user', component: ProfileUserComponent, canActivate: [AuthGuard] },
    { path: 'business', component: BusinessComponent, canActivate: [AuthGuard]},
    { path: 'faqs', component: FaqsComponent, canActivate: [AuthGuard] },
    { path: 'businessRegister', component: BusinessRegisterComponent },
    { path: 'businessLogin', component: BusinessLoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }