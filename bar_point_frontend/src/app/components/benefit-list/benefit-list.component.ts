import { Component, Input } from '@angular/core';
import { Benefit, BenefitsService } from 'src/app/services/benefits.service';

@Component({
    selector: 'app-benefit-list',
    templateUrl: './benefit-list.component.html',
    styleUrls: ['./benefit-list.component.css']
})
export class BenefitListComponent {
    @Input()
    businessId!: number;
    
    benefits: Benefit[] = [];

    private baseUrl: string = 'https://barpoint-6cc8.onrender.com/api';
    
    constructor(private benefitsService: BenefitsService) { }

    ngOnInit() {
        this.getBusinessBenefits();
    }

    getBusinessBenefits() {
        this.benefitsService.benefitsForaBusiness(this.businessId).subscribe((result) => {
            this.benefits = result.data;
        })
    };

    getImagenUrl(imagenNombre: string): string {
        if (imagenNombre) {
            return `${this.baseUrl}/images/${imagenNombre}`;
        }
        else {
            return "../../../assets/defaultImage.png";
        }
    };
       
}


