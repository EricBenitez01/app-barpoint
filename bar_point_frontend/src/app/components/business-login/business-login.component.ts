import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export interface BusinessLogin {
    email: string,
    password: string
}

@Component({
    selector: 'app-business-login',
    templateUrl: './business-login.component.html',
    styleUrls: ['./business-login.component.css']
})
export class BusinessLoginComponent {
    businessLoginForm: FormGroup;
    clicking: boolean = false;

    errorMessage: string = '';

    constructor(
        private authService: AuthService, 
        private cdr: ChangeDetectorRef, 
        private fb: FormBuilder,
        private router: Router
    ) {
        this.businessLoginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    async onLogin() {
        const business: BusinessLogin = {
            email: this.businessLoginForm.value.email,
            password: this.businessLoginForm.value.password
        };

        try {
            const response = await this.authService.loginBusiness(business.email, business.password);
            this.cdr.detectChanges();

            if (!response.error) {
                this.authService.setToken(response.token);
                // Se redirige a la ruta Business
                this.router.navigate(['business']);
            }
        } catch (error) {
            this.errorMessage = 'Datos incorrectos. Por favor, verifica tus credenciales.';
        }

    }

    onClickEvent(event: Event) {
        event.preventDefault();
        if (!this.clicking) {
            this.clicking = true;
            setTimeout(() => {
                this.clicking = false;
            }, 1000);
            this.onLogin();
        }
    }
}
