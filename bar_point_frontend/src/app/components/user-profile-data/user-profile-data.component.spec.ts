import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileDataComponent } from './user-profile-data.component';

describe('UserProfileDataComponent', () => {
  let component: UserProfileDataComponent;
  let fixture: ComponentFixture<UserProfileDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileDataComponent]
    });
    fixture = TestBed.createComponent(UserProfileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
