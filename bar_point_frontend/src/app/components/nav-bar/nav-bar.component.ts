import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
    providers: [MessageService]
})
export class NavBarComponent {

    items: any[] | undefined;
    constructor(private messageService: MessageService, private router: Router, private authService: AuthService) { }

    redirectLogin() {
        // Se cierra la sesión del user
        this.authService.logout();
        // Se redirige al login
        this.router.navigate(['']);
    }

    redirectHome() {
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['home']);
        }
    }

    ngOnInit() {
        this.items = [
            {
                label: 'MIS DATOS',
                items: [
                    {
                        label: 'Mis datos',
                        icon: 'pi pi-user',
                        command: () => {
                            this.router.navigate(['profile-user']);
                        }
                    }
                ]
            },
            {
                label: 'SOBRE NOSOTROS',
                items: [
                    {
                        label: 'FAQs',
                        icon: 'pi pi-question-circle',
                        command: () => {
                            this.router.navigate(['faqs']);
                        }
                    },
                    {
                        label: 'Menú',
                        icon: 'pi pi-map',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Log Out',
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
