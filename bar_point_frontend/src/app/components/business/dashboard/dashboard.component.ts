import { Component, Input } from '@angular/core';
import { BusinessService, dashboardStatus } from 'src/app/services/business.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboardStatus!: dashboardStatus;
  @Input()
  businessId!: number;

  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    this.initial();

  }

  async initial() {
    this.businessService.getDashboardStatus(this.businessId)
      .subscribe((result) => {
        this.dashboardStatus = result
      });
  }
}
