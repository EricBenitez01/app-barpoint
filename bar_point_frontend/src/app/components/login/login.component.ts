import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface UserLogin {
    email: string,
    password: string,
    businessId: number
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usuarioForm: FormGroup;
    clicking: boolean = false;
    businessId!: number;

    constructor(
        private authService: AuthService, 
        private cdr: ChangeDetectorRef, 
        private fb: FormBuilder,
        private router: Router, 
        private route: ActivatedRoute 
    ) {
        this.usuarioForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    async onLogin() {
        const user: UserLogin = {
            email: this.usuarioForm.value.email,
            password: this.usuarioForm.value.password,
            businessId: this.businessId
        };

        try {
            const response = await this.authService.loginUser(user.email, user.password, user.businessId);
            this.cdr.detectChanges();
            this.route.params.subscribe(params => {
            this.businessId = params['id'];})
            if (!response.error) {
                this.authService.setToken(response.token);
                // Se redirige a la ruta Home
                this.router.navigate(['home', this.businessId]);
            }
            
        } catch (error) {
            // TO-DO: Mostrar info al usuario avisando que ingresó datos incorrectos
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

    toRegister() {
        this.router.navigate(['register', this.businessId]);
    }
}