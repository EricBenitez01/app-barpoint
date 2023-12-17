import { Component, Input } from '@angular/core';
import { BenefitsService } from 'src/app/services/benefits.service';

@Component({
	selector: 'app-benefit-popup-delete',
	templateUrl: './benefit-popup-delete.component.html',
	styleUrls: ['./benefit-popup-delete.component.css']
})
export class BenefitPopupDeleteComponent {

	@Input()
    benefitId!: number;

	visible: boolean = false;

	constructor(private benefitService: BenefitsService) {}

	showDialog() {
        this.visible = true;
    };

	cancel() {
        this.visible = false;
    };

	deleteBenefit() {
        this.benefitService.delete(this.benefitId)
            .subscribe(response => {
                console.log(response);
            });
        this.visible = false;
    };
}
