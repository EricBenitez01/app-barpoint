import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
    @Input()
    businessId!: number;

    constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.businessId = params['id'];
        })

        const token = this.authService.getToken();

        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));

            // Se recupera del payload el id del user
            if ('businessId' in tokenData) {
                this.businessId = tokenData.businessId;
            }
        }
    }

    redirectHome() {
        this.router.navigate(['home', this.businessId]);
    }

    redirectFaqs() {
        this.router.navigate(['faqs', this.businessId]);
    }

    redirectBusinessLogin() {
        // Se cierra la sesión del business
        this.authService.logout();
        // Se redirige al businessLogin
        this.router.navigate(['businessLogin']);
    }
}
