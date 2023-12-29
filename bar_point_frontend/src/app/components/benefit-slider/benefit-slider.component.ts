import { Component, Input } from '@angular/core';
import { Benefit, BenefitsService } from 'src/app/services/benefits.service';

@Component({
    selector: 'app-benefit-slider',
    templateUrl: './benefit-slider.component.html',
    styleUrls: ['./benefit-slider.component.css']
})
export class BenefitSliderComponent {
    
    @Input()
    businessId!: number;
    
    responsiveOptions: any[] = [];
    benefits: Benefit[] = [];

    private baseUrl: string = 'https://barpoint-6cc8.onrender.com/api';
    
    constructor(private benefitsService: BenefitsService) { }

    ngOnInit() {
        this.getBusinessBenefits();
    }

    getBusinessBenefits() {
        this.benefitsService.benefitsForaBusiness(this.businessId).subscribe((result) => {
            this.responsiveOptions = result.data.slice(0, 5);
            this.benefits = this.responsiveOptions;
        })
        console.log("Esta es la data " + this.responsiveOptions);
        
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

  