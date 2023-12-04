import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
    constructor(private router: Router, private authService: AuthService) { }

    redirectHome() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['home']);
        }
    }

    redirectBusinessLogin() {
        // Se cierra la sesión del business
        this.authService.logout();
        // Se redirige al businessLogin
        this.router.navigate(['businessLogin']);
    }
}
