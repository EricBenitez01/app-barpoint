import { Component } from '@angular/core';

@Component({
    selector: 'app-benefit-slider',
    templateUrl: './benefit-slider.component.html',
    styleUrls: ['./benefit-slider.component.css']
})
export class BenefitSliderComponent {

    responsiveOptions: any[] = [];
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
        },
        {
            title: 'Beneficio 3',
            descriptions: 'Canjea tus puntos por una botella de vino gratis con la compra de dos platos principales.',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 4',
            descriptions: 'Descuento del 30% en todas las bebidas alcohólicas, válido toda la noche.',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 5',
            descriptions: 'Canjea tus puntos por un cóctel especial del día a mitad de precio.',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 6',
            descriptions: 'Noche de sushi: Canjea tus puntos por una bandeja de sushi al 50% de descuento.',
            points: '2456 PTS'
        },
        {
            title: 'Beneficio 7',
            descriptions: 'Obtén una bebida premium gratis al canjear tus puntos en la barra.',
            points: '2456 PTS'
        }
    ];


    ngOnInit() {
        this.responsiveOptions = [
            {
                breakpoint: '2000px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '1460px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
}

interface Benefit {
    title: string;
    descriptions: string;
    points: string;
}
  