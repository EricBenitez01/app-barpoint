import { Component, Input } from '@angular/core';
import { BusinessService } from 'src/app/services/business.service';

const ZOOM_STEP: number = 0.25;
const DEFAULT_ZOOM: number = 0.75;
const MAX_ZOOM: number = 2.5;

@Component({
    selector: 'app-menu-viewer-data',
    templateUrl: './menu-viewer-data.component.html',
    styleUrls: ['./menu-viewer-data.component.css']
})
export class MenuViewerDataComponent {

    @Input()
    businessId!: number;

    business: any;

    menu: string = '';

    private baseUrl: string = 'https://barpoint-6cc8.onrender.com/api';

    constructor(private businessService: BusinessService) {}

    ngOnInit() {
        this.getBusiness(this.businessId);
    }

    async getBusiness(businessId: number) {
        await this.businessService.getBusiness(businessId)
            .subscribe(
                (result) => {
                    this.business = result.data;
                    this.menu = this.business.menu;
                    console.log(this.business.businessName);
                    
                }
            )
    }

    public pdfZoom: number = DEFAULT_ZOOM;

    zoomIn() {
        if (this.pdfZoom < MAX_ZOOM) {
            this.pdfZoom += ZOOM_STEP;
        }
    }

    zoomOut() {
        if (this.pdfZoom > DEFAULT_ZOOM) {
            this.pdfZoom -= ZOOM_STEP;
        }
    }

    resetZoom() {
        this.pdfZoom = DEFAULT_ZOOM;
    }

    getPdfUrl(pdfNombre: string): string {
        if (pdfNombre) {
            return `${this.baseUrl}/businesses/menu/${pdfNombre}`;
        }
        else {
            return "../../../assets/defaultPdf.pdf";
        }
    };

}
