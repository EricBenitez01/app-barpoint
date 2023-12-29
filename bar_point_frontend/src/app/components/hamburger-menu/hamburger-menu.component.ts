import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-hamburger-menu',
    templateUrl: './hamburger-menu.component.html',
    styleUrls: ['./hamburger-menu.component.css'],
    providers: [MessageService]
})
export class HamburgerMenuComponent {
    @Input()
    businessId!: number;

    items: any[] | undefined;

    constructor(private messageService: MessageService, private router: Router, private authService: AuthService) { }

    redirectLogin() {
        // Se cierra la sesión del user
        this.authService.logout();
        // Se redirige al login
        this.router.navigate(['login', this.businessId]);
    }

    redirectHome() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['home', this.businessId]);
        }
    }

    ngOnInit() {
        this.items = [
            {
                label: 'USUARIO',
                items: [
                    {
                        label: 'Mis datos',
                        icon: 'pi pi-user',
                        command: () => {
                            this.router.navigate(['profile-user', this.businessId]);
                        }
                    }
                ]
            },
            {
                label: 'SOBRE NOSOTROS',
                items: [
                    {
                        label: 'Preguntas Frecuentes',
                        icon: 'pi pi-question-circle',
                        command: () => {
                            this.router.navigate(['faqs', this.businessId]);
                        }
                    },
                    {
                        label: 'Menú',
                        icon: 'pi pi-map',
                        command: () => {
                            this.router.navigate(['menu-viewer', this.businessId]);
                        }
                    },
                    {
                        label: 'Cerrar sesión',
                        icon: 'pi pi-sign-out',
                        command: () => {
                            this.redirectLogin();
                        }
                    }
                ]

            }
        ];
    }

    update() {
        alert('El boton funciona');
    }

    delete() {
        alert('El boton funciona');
    }
}
