import { Component, Input, OnInit } from '@angular/core';
import { Benefit, BenefitsService } from 'src/app/services/benefits.service';

@Component({
    selector: 'app-promotions',
    templateUrl: './promotions.component.html',
    styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

    @Input()
    businessId!: number;

    benefits: Benefit[] = [];

    constructor(private benefitsService: BenefitsService) { }

    ngOnInit(): void {
        this.getBusinessBenefits();
    }

    getBusinessBenefits() {
        this.benefitsService.benefitsForaBusiness(this.businessId).subscribe((result) => {
            this.benefits = result.data;
        })
    };

    reloadBenefits() {
        this.benefitsService.benefitsForaBusiness(this.businessId).subscribe((result) => {
            this.benefits = result.data;
        })
    }
}