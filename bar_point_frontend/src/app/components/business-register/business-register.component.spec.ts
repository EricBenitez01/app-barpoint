import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRegisterComponent } from './business-register.component';

describe('BusinessRegisterComponent', () => {
  let component: BusinessRegisterComponent;
  let fixture: ComponentFixture<BusinessRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessRegisterComponent]
    });
    fixture = TestBed.createComponent(BusinessRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
