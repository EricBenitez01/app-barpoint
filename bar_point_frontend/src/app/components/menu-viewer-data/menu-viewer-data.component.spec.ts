import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuViewerDataComponent } from './menu-viewer-data.component';

describe('MenuViewerDataComponent', () => {
  let component: MenuViewerDataComponent;
  let fixture: ComponentFixture<MenuViewerDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuViewerDataComponent]
    });
    fixture = TestBed.createComponent(MenuViewerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
