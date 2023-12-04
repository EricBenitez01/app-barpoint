import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPopupComponent } from './transaction-popup.component';

describe('TransactionPopupComponent', () => {
  let component: TransactionPopupComponent;
  let fixture: ComponentFixture<TransactionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionPopupComponent]
    });
    fixture = TestBed.createComponent(TransactionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
