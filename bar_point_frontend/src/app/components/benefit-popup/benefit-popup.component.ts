import { Component, Input } from '@angular/core';
import { Benefit, BenefitsService } from 'src/app/services/benefits.service';

@Component({
    selector: 'app-benefit-popup',
    templateUrl: './benefit-popup.component.html',
    styleUrls: ['./benefit-popup.component.css']
})

export class BenefitPopupComponent {

    @Input()
    businessId!: number;

    title!: string;
    description!: string;
    discount!: number;
    points!: string;
    newBenefit!: Benefit;

    visible: boolean = false;

    constructor(private benefitService: BenefitsService) {}

    showDialog() {
        console.log("BusinessId: " + this.businessId);
        this.visible = true;
    }

    saveBenefit() {
        if (this.title && this.description && this.discount && this.points) {
            this.newBenefit = {
                businessFK: this.businessId,
                benefitname: this.title,
                img: null,
                discount: this.discount,
                description: this.description,
                points_req: this.points
            };
            console.log(this.newBenefit);
            this.benefitService.create(this.newBenefit)
            .subscribe(response => {
                console.log(response);
            });
        }
        this.visible = false;
    }
}