import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin, UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usuarioForm: FormGroup;

    constructor(private userService: UsersService, private cdr: ChangeDetectorRef, private fb: FormBuilder) {
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
        
        let response = await this.userService.userLogin(user).subscribe(
            (data) => {
                this.cdr.detectChanges();
                console.log(data);
            },
            (error) => {
                // Manejo de errores
                console.error(error);
            }
        ); 
    }
}