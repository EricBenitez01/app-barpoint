import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-faqs',
    templateUrl: './faqs.component.html',
    styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
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
