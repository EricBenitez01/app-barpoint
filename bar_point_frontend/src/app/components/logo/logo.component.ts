import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.css']
})
export class LogoComponent {
    @Input()
    businessId!: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }
    redirectHome() {
        this.router.navigate(['home', this.businessId]);
    }
}
