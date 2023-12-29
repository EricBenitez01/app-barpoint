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
import { MenuViewerComponent } from './components/menu-viewer/menu-viewer.component';
import { RolesEnum } from './services/auth.service';

const routes: Routes = [
    { path: '', redirectTo: '/login/3', pathMatch: 'full' },
    { path: 'login/:id', component: LoginComponent },
    { path: 'register/:id', component: RegisterComponent },
    { path: 'home/:id', component: HomeComponent },
    { path: 'users', component: UserComponent },
    { path: 'profile-user/:id', component: ProfileUserComponent },
    { path: 'business', component: BusinessComponent},
    { path: 'faqs/:id', component: FaqsComponent},
    { path: 'businessRegister', component: BusinessRegisterComponent },
    { path: 'businessLogin', component: BusinessLoginComponent },
    { path: 'menu-viewer/:id', component: MenuViewerComponent },
];
/*
toDo Protejer rutas
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { expectedRole: [RolesEnum.UserRole, RolesEnum.BusinessRole] } },
    { path: 'users', component: UserComponent, canActivate: [AuthGuard], data: { expectedRole: [RolesEnum.UserRole] } },
    { path: 'profile-user', component: ProfileUserComponent, canActivate: [AuthGuard], data: { expectedRole: [RolesEnum.UserRole] }},
    { path: 'business', component: BusinessComponent, canActivate: [AuthGuard], data: { expectedRole: [RolesEnum.BusinessRole] }},
    { path: 'login', component: LoginComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'businessRegister', component: BusinessRegisterComponent },
    { path: 'businessLogin', component: BusinessLoginComponent }, 
*/

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }