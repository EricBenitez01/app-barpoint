import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormGroup y Validators
import { Router } from '@angular/router';
import { Business, BusinessService } from 'src/app/services/business.service';

@Component({
    selector: 'app-business-register',
    templateUrl: './business-register.component.html',
    styleUrls: ['./business-register.component.css']
})
export class BusinessRegisterComponent {
    businessForm: FormGroup;
    business: Business = {
        name: "",
        lastname: "",
        cuit: 0,
        adress: "",
        phone: 0,
        businessName: "",
        email: "",
        password: "",
        rolFK: 2
    };
    clicking: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private userService: BusinessService,
        private cdr: ChangeDetectorRef, 
        private fb: FormBuilder,
        private router: Router) {
        this.businessForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            lastname: ['', [Validators.required]],
            cuit: ['', [Validators.required]],
            adress: ['', [Validators.required]],
            phone: ['', [Validators.required]],
            businessName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            rolFK: 2
        });
    }

    async onSubmit() {
        if (this.businessForm.valid) { // Verifica si el formulario es válido
            this.business = { ...this.business, ...this.businessForm.value };
            console.log("Negocio: " + this.business);
            
            let response = await this.userService.createBusinesses(this.business).subscribe(
                (data) => {
                    this.cdr.detectChanges();
                    console.log(data);
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
            this.router.navigate(['businessLogin']);
        }
    }
};
