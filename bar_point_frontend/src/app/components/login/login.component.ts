import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export interface UserLogin {
    email: string,
    password: string
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usuarioForm: FormGroup;

    constructor(
        private authService: AuthService, 
        private cdr: ChangeDetectorRef, 
        private fb: FormBuilder,
        private router: Router
    ) {
        this.usuarioForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    async onLogin() {
        const user: UserLogin = {
            email: this.usuarioForm.value.email,
            password: this.usuarioForm.value.password
        };

        try {
            const response = await this.authService.loginUser(user.email, user.password);
            this.cdr.detectChanges();

            if (!response.error) {
                this.authService.setToken(response.token);
                // Se redirige a la ruta Home
                this.router.navigate(['home']);
            }
            
        } catch (error) {
            // TO-DO: Mostrar info al usuario avisando que ingresó datos incorrectos
        }

    }

    onClickEvent() {
        this.onLogin();
    }
}