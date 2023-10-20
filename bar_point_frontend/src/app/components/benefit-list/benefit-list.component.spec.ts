import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitListComponent } from './benefit-list.component';

describe('BenefitListComponent', () => {
  let component: BenefitListComponent;
  let fixture: ComponentFixture<BenefitListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BenefitListComponent]
    });
    fixture = TestBed.createComponent(BenefitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
