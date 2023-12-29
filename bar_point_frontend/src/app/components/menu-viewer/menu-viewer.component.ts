import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-menu-viewer',
    templateUrl: './menu-viewer.component.html',
    styleUrls: ['./menu-viewer.component.css']
})
export class MenuViewerComponent {
    businessId!: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.businessId = params['id'];
        })
    }

    redirectHome() {
        this.router.navigate(['home', this.businessId]);
    }

}
