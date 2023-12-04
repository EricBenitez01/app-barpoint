import { Component, Input } from '@angular/core';
import { User, UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent {
/* Se espera que devuelva el detalle del usuario logueado */
    @Input()
    userId: number = 1;

    userDetail: any;

    constructor(private userService: UsersService) { }

    ngOnInit() {
        this.getUser(this.userId);
    }

    async getUser(userId: number) {
        this.userService.getUser(userId)
            .subscribe(
                (result) => {
                    this.userDetail = result.data;
                    console.log(this.userDetail.username);
                    
                }
            )
    }
}
