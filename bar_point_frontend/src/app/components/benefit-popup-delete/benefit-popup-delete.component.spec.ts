import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitPopupDeleteComponent } from './benefit-popup-delete.component';

describe('BenefitPopupDeleteComponent', () => {
  let component: BenefitPopupDeleteComponent;
  let fixture: ComponentFixture<BenefitPopupDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitPopupDeleteComponent]
    });
    fixture = TestBed.createComponent(BenefitPopupDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
