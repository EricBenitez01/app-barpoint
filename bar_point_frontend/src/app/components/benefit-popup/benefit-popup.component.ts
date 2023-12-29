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
    uploadedFiles: any[] = [];
    image!: File;
    discount!: number;
    points!: string;

    visible: boolean = false;

    constructor(private benefitService: BenefitsService) {}

    showDialog() {
        this.visible = true;
    }

    onFileSelect(event: any) {
        if (event && event.files[0]) {
            this.image = event.files[0];
        }
    }

    saveBenefit() {
        if (this.title && this.description && this.points) {
            this.benefitService.create(this.businessId, this.title, this.description, this.points, this.image)
            .subscribe(response => {
                console.log(response);
            });
        }
        this.visible = false;
    }
}