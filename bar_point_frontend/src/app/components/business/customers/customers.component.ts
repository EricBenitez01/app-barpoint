import { Component, Input, OnInit } from '@angular/core';
import { BusinessService, BusinessUsers } from 'src/app/services/business.service';
import { User, UsersResponse, UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
    customers: User[] = [];

    @Input()
    businessId!: number;
    
    constructor(private businessService: BusinessService) { }

    ngOnInit(): void {
        this.getCustomers();
    }

    async getCustomers() {
        this.businessService.getBusinessUsers(this.businessId)
            .subscribe((result) => {
                this.customers = result.data
            });
    }
}