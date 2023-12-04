import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashletComponent } from './dashlet.component';

describe('DashletComponent', () => {
  let component: DashletComponent;
  let fixture: ComponentFixture<DashletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashletComponent]
    });
    fixture = TestBed.createComponent(DashletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
