import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {
    userId!: number;
    businessId!: number;

    constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const token = this.authService.getToken();

        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));

            // Se recupera del payload el id del user
            if ('userId' in tokenData) {
                this.userId = tokenData.userId;
            }
        }
        this.route.params.subscribe(params => {
            this.businessId = params['id'];
        })
    }

    redirectHome() {
        this.router.navigate(['home', this.businessId]);
    }
};