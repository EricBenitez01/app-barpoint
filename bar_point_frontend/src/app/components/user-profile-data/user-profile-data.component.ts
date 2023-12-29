import { Component, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-user-profile-data',
    templateUrl: './user-profile-data.component.html',
    styleUrls: ['./user-profile-data.component.css']
})
export class UserProfileDataComponent {
    @Input()
    userId!: number;
    @Input()
    businessId!: number;
    birthday!: Date;
    userDetail: any;

    constructor(private userService: UsersService) { }

    ngOnInit() {
        this.getUser(this.userId, this.businessId);
    }

    /* Recibo el detalle del usuario logueado */
    async getUser(userId: number, businessId: number) {
        this.userService.getUser(userId)
            .subscribe(
                (result) => {
                    this.userDetail = result.data;
                    this.birthday = this.userDetail.birthday.slice(0,10);
                    console.log(this.userDetail.username);   
                }
            )
    }
}
