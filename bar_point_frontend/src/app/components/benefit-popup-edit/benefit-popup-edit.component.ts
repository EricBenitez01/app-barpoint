import { Component, Input, OnInit } from '@angular/core';
import { BenefitsService } from 'src/app/services/benefits.service';

@Component({
    selector: 'app-benefit-popup-edit',
    templateUrl: './benefit-popup-edit.component.html',
    styleUrls: ['./benefit-popup-edit.component.css']
})
export class BenefitPopupEditComponent implements OnInit {
    @Input()
    benefitId!: number;

    @Input()
    title!: string;

    @Input()
    description!: string;

    @Input()
    image!: string;

    @Input()
    discount!: number;

    @Input()
    points!: string;

    imageToShow!: string;

    uploadedFiles: any[] = [];
    newImage!: File;

	visible: boolean = false;

	constructor(private benefitService: BenefitsService) {}

    ngOnInit(): void {
        if (this.image) {
            this.imageToShow = `https://barpoint-6cc8.onrender.com/api/images/${this.image}`;
        }
        else {
            this.imageToShow = "../../../assets/defaultImage.png";
        }
    };

	showDialog() {
        this.visible = true;
    };

	cancel() {
        this.visible = false;
    };

    onFileSelect(event: any) {
        if (event && event.files[0]) {
            this.newImage = event.files[0];
        }

        // Se actualiza la imagen mostrada en el formulario
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.imageToShow = e.target.result;
        };
        reader.readAsDataURL(this.newImage);
    };

    getImagenUrl(): string {
        if (this.image) {
            return `https://barpoint-6cc8.onrender.com/api/images/${this.image}`;
        }
        else {
            return "../../../assets/defaultImage.png";
        }
    };

	editBenefit() {
        const formData = new FormData();
        formData.append('businessFK', this.benefitId.toString());
        formData.append('benefitname', this.title);
        formData.append('description', this.description);
        formData.append('points_req', this.points);

        // Verifico si se editó la imagen
        if (this.newImage) {
            formData.append('img', this.newImage);
        }
        else {
            formData.append('img', this.image);
        }

        this.benefitService.edit(this.benefitId, formData)
            .subscribe(response => {
                console.log(response);
            });
        this.visible = false;
    };
}
