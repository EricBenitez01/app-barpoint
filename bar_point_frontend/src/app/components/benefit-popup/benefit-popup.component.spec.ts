import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitPopupComponent } from './benefit-popup.component';

describe('BenefitComponent', () => {
  let component: BenefitPopupComponent;
  let fixture: ComponentFixture<BenefitPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitPopupComponent]
    });
    fixture = TestBed.createComponent(BenefitPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
