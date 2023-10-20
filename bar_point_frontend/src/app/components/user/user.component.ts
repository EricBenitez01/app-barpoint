import { ChangeDetectorRef, Component } from '@angular/core';
import { UsersResponse, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users: UsersResponse = {
    "ok": true,
    "meta": {
    },
    "data": [
    ]
  };
  flag: boolean = false;
  constructor(private userService: UsersService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.user();
  }

  async user() {
    try {
      this.userService.getAllUsers().subscribe(
        (data) => {
          this.users = data;
          this.cdr.detectChanges();
          console.log(this.users.data);
          
        },
        (error) => {
          // Manejo de errores
          console.error(error);
        }
      );
    } catch (error) {
      // Manejo de errores
      console.error(error);
    }
  }

}
