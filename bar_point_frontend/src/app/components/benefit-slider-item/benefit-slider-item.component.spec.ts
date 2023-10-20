import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitSliderItemComponent } from './benefit-slider-item.component';

describe('BenefitSliderItemComponent', () => {
  let component: BenefitSliderItemComponent;
  let fixture: ComponentFixture<BenefitSliderItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitSliderItemComponent]
    });
    fixture = TestBed.createComponent(BenefitSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
