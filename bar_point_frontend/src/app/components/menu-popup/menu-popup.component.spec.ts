import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopupComponent } from './menu-popup.component';

describe('MenuPopupComponent', () => {
  let component: MenuPopupComponent;
  let fixture: ComponentFixture<MenuPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPopupComponent]
    });
    fixture = TestBed.createComponent(MenuPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
