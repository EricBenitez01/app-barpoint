import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitPopupEditComponent } from './benefit-popup-edit.component';

describe('BenefitPopupEditComponent', () => {
  let component: BenefitPopupEditComponent;
  let fixture: ComponentFixture<BenefitPopupEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitPopupEditComponent]
    });
    fixture = TestBed.createComponent(BenefitPopupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
