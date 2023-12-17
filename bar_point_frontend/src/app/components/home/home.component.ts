import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  businessId!: number;
  
  constructor(private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.businessId = params['id'];})
  }
  
}
