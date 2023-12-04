import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormGroup y Validators
import { User, UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    clienteForm: FormGroup; // Define un FormGroup para el formulario
    cliente: User = {
        username: "",
        email: "",
        birthday: "",
        address: "",
        gender: "",
        password: "",
        rolFK: 1
    };

    genderList: string[] = [];

    constructor(private userService: UsersService, private cdr: ChangeDetectorRef, private fb: FormBuilder, private router: Router) {
        // Inicializa el FormGroup y define las validaciones
        this.clienteForm = this.fb.group({
            username: ['', Validators.required], // Campo nombreApellido con validación requerida
            email: ['', [Validators.required, Validators.email]], // Campo email con validación requerida y de formato email
            birthday: ['', Validators.required], // Campo fechaNacimiento con validación requerida
            address: ['', Validators.required], // Campo localidadDireccion con validación requerida
            gender: ['', Validators.required], // Campo gender con validación requerida
            password: ['', Validators.required], // Campo Password con validación requerida
        });
    }

    ngOnInit() {
        this.genderList = ["Masculino", "Femenino", "Otro"];
    }

    async onSubmit() {
        if (this.clienteForm.valid) { // Verifica si el formulario es válido
            this.cliente = { ...this.cliente, ...this.clienteForm.value };
            let response = await this.userService.createUser(this.cliente).subscribe(
                (data) => {
                    this.cdr.detectChanges();
                    console.log(data);
                },
                (error) => {
                    console.error(error);
                }
            );
        }
        this.router.navigate(['login']);
    }
}
