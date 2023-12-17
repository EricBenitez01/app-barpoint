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
    
    constructor(private benefitsService: BenefitsService) { }

    ngOnInit() {
        this.getBusinessBenefits();
    }

    getBusinessBenefits() {
        this.benefitsService.benefitsForaBusiness(this.businessId).subscribe((result) => {
            this.responsiveOptions = result.data;
            this.benefits = this.responsiveOptions;
        })
        console.log("Esta es la data " + this.responsiveOptions);
        
    };
    
}

  