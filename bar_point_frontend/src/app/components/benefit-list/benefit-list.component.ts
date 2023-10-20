import { Component } from '@angular/core';

@Component({
    selector: 'app-benefit-list',
    templateUrl: './benefit-list.component.html',
    styleUrls: ['./benefit-list.component.css']
})
export class BenefitListComponent {
    benefits: Benefit[] = [
        {
            title: 'Beneficio 1',
            descriptions: '¡Noche de Cervezas! Canjea tus puntos por 2x1 en cervezas artesanales.',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 2',
            descriptions: 'Hora Feliz: Canjea tus puntos y obtén un 50% de descuento en cervezas hasta las 2 am.',
            points: '2456 PTS'
        }
    ];
       
}

interface Benefit {
    title: string;
    descriptions: string;
    points: string;
}
