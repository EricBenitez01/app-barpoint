import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    userId!: number;
    @Input() businessId!: number;
    points: any;
    user!: any;
    userPoints: any = 0;
    username: any = 'Negocio';

    constructor(
        private userService: UsersService,
        private cdr: ChangeDetectorRef,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        const token = this.authService.getToken();

        if (token) {
            const tokenData = JSON.parse(atob(token.split('.')[1]));
            // Se recupera del payload el id del usuario
            if ('userId' in tokenData) {
                this.userId = tokenData.userId;
            }
        }

        this.getUserData();
    }

    getUserData() {
        try {
            this.userService.getUser(this.userId).subscribe(
                (data) => {
                    this.user = data.data;
                    this.username = this.user.username;
                    this.cdr.detectChanges();
                    this.findUserPoints();
                },
                (error) => {
                    // Manejo de errores al obtener datos del usuario
                    console.error('Error al obtener datos del usuario:', error);
                }
            );
        } catch (error) {
            // Manejo de errores
            console.error('Error en la función getUserData:', error);
        }
    }

    findUserPoints() {
        try {
            this.points = this.user.user_points;
            for (let i = 0; i < this.points.length; i++) {
                if(this.points[i].businessfk == this.businessId){
                    this.userPoints = this.points[i].quantity;
                }
            }
            console.log(this.userPoints);

        } catch (error) {
            // Manejo de errores al buscar puntos del usuario
            console.error('Error al buscar puntos del usuario:', error);
        }
    }
}

