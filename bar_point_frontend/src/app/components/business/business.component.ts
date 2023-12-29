import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
    selector: 'app-business',
    templateUrl: './business.component.html',
    styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
    businessId!: number;
    rol!: number;

    constructor( private authService: AuthService ) { } 

    ngOnInit(): void {
        const token = this.authService.getToken();

        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));

            // Se recupera del payload el id del business
            if ('businessId' in tokenData) {
                this.businessId = tokenData.businessId;
            }
            if ('rol' in tokenData) {
                this.rol = tokenData.rol;
            }
        }
    }

}
