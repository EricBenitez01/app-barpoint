import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitSliderComponent } from './benefit-slider.component';

describe('BenefitSliderComponent', () => {
  let component: BenefitSliderComponent;
  let fixture: ComponentFixture<BenefitSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitSliderComponent]
    });
    fixture = TestBed.createComponent(BenefitSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
