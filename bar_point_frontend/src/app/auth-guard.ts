import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService, RolesEnum } from '../app/services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isLoggedIn()) {
            const userRole = this.authService.getRole();

            // Se verifica el rol permitido para la ruta actual
            if (this.checkRole(route.data['expectedRole'], userRole)) {
                console.log("AuthGuard isLoggedIn");
                return true;
            } else {
                // Si el rol no es válido, cierra sesión y redirige al login correspondiente
                if (route.data['expectedRole'] == RolesEnum.UserRole) {
                    this.router.navigate(['']);
                }
                else {
                    this.router.navigate(['businessLogin']);
                }
                console.log("AuthGuard detected invalid Role");
                this.authService.logout();
                return false;
            }
        } else {
            // Si el usuario no está logueado, redirige al login
            this.router.navigate(['']);
            console.log("AuthGuard detected unlogged user");
            return false;
        }
    }

    private checkRole(expectedRole: RolesEnum[], userRole: RolesEnum | null): boolean {
        // Se verifica si el rol está en la lista de roles permitidos
        return userRole !== null && expectedRole.includes(userRole);
    }
}