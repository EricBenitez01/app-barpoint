import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../app/services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            console.log("AuthGuard isLoggedIn");
            return true;
        } else {
            // Si el usuario no está logueado, redirige al login
            this.router.navigate(['']);
            return false;
        }
    }
}