import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [MessageService]
})
export class NavBarComponent {

  items: any[] | undefined;
  constructor(private messageService: MessageService) {}
    ngOnInit() {
        this.items = [
            {
                label: 'MIS DATOS',
                items: [
                    {
                        label: 'Mis datos',
                        icon: 'pi pi-user',
                        command: () => {
                            this.update();
                        }
                    }
                ]
            },
            {
                label: 'SOBRE NOSOTROS',
                items: [
                    {
                        label: 'FAQs',
                        icon: 'pi pi-check',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Menú',
                        icon: 'pi pi-check',
                        command: () => {
                            this.update();
                        }
                    },
                    {
                        label: 'Log Out',
                        icon: 'pi pi-check',
                        command: () => {
                            this.update();
                        }
                    }
                ]
                
            }
        ];
    }

    update() {
        alert('El boton funciona');
    }

    delete() {
      alert('El boton funciona');
    }
}
