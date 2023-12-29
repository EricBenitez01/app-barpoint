import { Component, Input } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service'; 

@Component({
    selector: 'app-menu-popup',
    templateUrl: './menu-popup.component.html',
    styleUrls: ['./menu-popup.component.css']
})
export class MenuPopupComponent {

    @Input()
    businessId!: number;

    menu!: any;

    visible: boolean = false;

    constructor(private businessService: BusinessService) {}

    showDialog() {
        this.visible = true;
    }

    onFileSelect(event: any) {
        if (event && event.files[0]) {
            this.menu = event.files[0];
        }
    }

    saveBusinessMenu() {
        if (this.menu) {
            this.businessService.editBusinesses(this.businessId, this.menu)
            .subscribe(response => {
                console.log(response);
            });
        }
        this.visible = false;
    }

}
