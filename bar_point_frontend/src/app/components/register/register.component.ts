import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormGroup y Validators
import { User, UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    businessId!: number;
    clienteForm: FormGroup; // Define un FormGroup para el formulario
    cliente: User = {
        username: "",
        email: "",
        birthday: "",
        address: "",
        gender: "",
        password: "",
        rolfk: 1,
        businessId: this.businessId
    };
    genderList: string[] = [];
    clicking: boolean = false;

    constructor(
        private userService: UsersService,
        private cdr: ChangeDetectorRef, 
        private fb: FormBuilder, 
        private router: Router,
        private route: ActivatedRoute) {
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
        this.route.params.subscribe(params => {
            this.businessId = params['id'];})
    }

    async onSubmit() {
        if (this.clienteForm.valid) {
            this.cliente = { ...this.cliente, ...this.clienteForm.value };
            this.cliente.businessId = this.businessId;
            let response = await this.userService.createUser(this.cliente).subscribe(
                (data) => {
                    this.cdr.detectChanges();
                },
                (error) => {
                    console.error(error);
                }
            );
        }
    }

    onClickEvent(event: Event) {
        event.preventDefault();
        if (!this.clicking) {
            this.clicking = true;
            setTimeout(() => {
                this.clicking = false;
            }, 1000);
            this.onSubmit();
            this.router.navigate(['login', this.businessId]);
        }
    }

    toLogin() {
        this.router.navigate(['login', this.businessId]);
    }
}