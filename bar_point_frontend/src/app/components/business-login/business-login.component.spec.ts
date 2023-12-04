import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessLoginComponent } from './business-login.component';

describe('BusinessLoginComponent', () => {
  let component: BusinessLoginComponent;
  let fixture: ComponentFixture<BusinessLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessLoginComponent]
    });
    fixture = TestBed.createComponent(BusinessLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
