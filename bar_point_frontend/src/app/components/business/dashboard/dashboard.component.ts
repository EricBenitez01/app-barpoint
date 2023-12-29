import { Component, Input } from '@angular/core';
import { BusinessService, dashboardStatus } from 'src/app/services/business.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboardStatus!: dashboardStatus;
  benefitCreated: number = 0;
  userPointsLastMonth: number = 0;
  userPointsLastWeek: number = 0;
  users: number = 0;

  @Input()
  businessId!: number;

  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    this.initial();
    /* this.benefitCreated = 0;
    this.userPointsLastMonth = 0;
    this.userPointsLastWeek = 0;
    this.users = 0; */
  }

  async initial() {
    this.businessService.getDashboardStatus(this.businessId)
      .subscribe((result) => {
        this.dashboardStatus = result;
        this.benefitCreated = this.dashboardStatus.benefitCreated;
        this.userPointsLastMonth = this.dashboardStatus.userPointsLastMonth;
        this.userPointsLastWeek = this.dashboardStatus.userPointsLastWeek;
        this.users = this.dashboardStatus.users;
      });
  }
}
